const express = require('express');
const cors = require('cors');
const {v4 : uuidv4} = require('uuid');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Podłączanie postgresa
const { Pool } = require('pg');
// konfiguracja bazy postgres 
const pgClient = new Pool({
    user: "postgres",
    password: "1qaz2wsx",
    database: "postgres",
    host: "mypostgres",
    port: "5432"
});

// tworzenie tabeli postgres dla potrzeb wpisywania instrumentow
// podział instrumentów: Id, nazwa(organy) rodzaj(klawiszowe) typ(piszczałkowe)
pgClient.query('CREATE TABLE IF NOT EXISTS instrumenty (id UUID UNIQUE, nazwa VARCHAR, rodzaj VARCHAR, typ VARCHAR, PRIMARY KEY (id))')
        .catch((err) => {
            console.log(err);
        });

// informacja o błędzie połączenia z postgresem
pgClient.on('error', () => {
    console.log("Postgres - no connection");
});

// Podłączanie redisa
const redis = require("redis");

const redisClient = redis.createClient({
    host: 'myredis', // nazwa
    port: 6379
});


// mybackend

// localhost:8080 lub 127.0.0.1:8080
app.get("/", (req, res) => {
    res.send("Hello World!"); 
});

// localhost:8080/instrumenty
app.post('/instrumenty', function (req, res) {
    const data = req.body;
    const id = uuidv4();
    redisClient.hmset(`${id}`, {'nazwa': `${data.nazwa}`, 'rodzaj': `${data.rodzaj}`, 'typ': `${data.typ}`, });
    pgClient.query(`INSERT INTO instrumenty (id, nazwa, rodzaj, typ) VALUES ('${id}', '${data.nazwa}', '${data.rodzaj}', '${data.typ}')`);
    res.send("add object to redis and postgres");
    console.log('add object to redis and postgres');
    res.end();
});

app.get("/instrumenty/:id", (req, res) => {
    const id = req.params.id;

    redisClient.exists(id, (err, redis_exist) => {
        if (redis_exist == 1) {
            redisClient.hgetall(id, (err, redis_res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    const data = redis_res;
                    console.log('request from redis');
                    res.send(data);
                }
            });
        } else {
            pgClient.query(`SELECT * FROM instrumenty WHERE id='${id}';`, (err, postgres_res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    const data = postgres_res.rows[0]
                    console.log('request form postgres');
                    res.send(data);
                }
            });
        }
    });


});

// konfiguracja mybackend
const PORT = 5050;
app.listen(PORT, () => {
    console.log(`mybackend port: ${PORT}`);
});

