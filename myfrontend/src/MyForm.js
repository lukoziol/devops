import React, {useState,useEffect} from "react";
import axios from 'axios';

const MyForm = (props) => {

    const [nazwa, setNazwa] = useState("");
    const [rodzaj, setRodzaj] = useState("");

    const handleSubmit = (event) => {
        console.log(`Dane do wysłania ${nazwa} ${rodzaj}`);

        axios.post('http://localhost:8080/instrumenty/dodaj', {
            nazwa: nazwa,
            rodzaj: rodzaj,
            userId: 1 
        })
       // .then(response => setPosts(response.data))
       // .catch(error => console.log(error));
          .then(function (response){
              console.log(response);
          })
          .catch(function (error){
              console.log(error);
          });


        event.preventDefault(); 
    };

    return (
        <>
            <input type='text' value={nazwa} onChange= {event => setNazwa(event.target.value)}/><br />
            <input type='text' value={rodzaj} onChange= {event => setRodzaj(event.target.value)}/><br />

            <input type='submit' value='OK' onClick={handleSubmit}/>

            
            
        </>
    );

};

export default MyForm;
