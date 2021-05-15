import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UpdateInstruments = (props) => {

    const [nazwa, setNazwa] = useState("");
    const [rodzaj, setRodzaj] = useState("");
    const [typ, setTyp] = useState("");
    

    useEffect(() => {
        axios.get(`http://localhost:5050/instrumenty/${props.id}`)
            .then(response => {
                setNazwa(response.data.nazwa);
                setRodzaj(response.data.rodzaj);
                setTyp(response.data.typ);
            
            })
            .catch(error => console.log(error));
    }, [props.id]);

    const submit = (event) => {
        axios.put(`http://localhost:5050/instrumenty/update/${props.id}`, {
            nazwa: nazwa,
            rodzaj: rodzaj,
            typ: typ,
            
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
            
    }


    return (
        <div className="prezentation">
            <h2>Update w bazie danych</h2>
            <h5>id: {props.id}</h5>
            <form>
                <input type='text' placeholder='Nazwa' value={nazwa} onChange={event => setNazwa(event.target.value)} /><br/>
                <input type='text' placeholder='Rodzaj' value={rodzaj} onChange={event => setRodzaj(event.target.value)} /><br/>
                <input type='text' placeholder='Typ' value={typ} onChange={event => setTyp(event.target.value)} /><br/>
               
                <input type='submit' value='Update w bazie danych' onClick={submit} />
            </form>
        </div>
    );

}

export default UpdateInstruments;
