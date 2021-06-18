import React, {useState} from "react";
import axios from 'axios';

const AddInstrument = (props) => {

    const [nazwa, setNazwa] = useState("");
    const [rodzaj, setRodzaj] = useState("");
    const [typ, setTyp] = useState("");

    const saveToDb = (event) => {
        axios.post('api/instrumenty', {
            nazwa: nazwa,
            rodzaj: rodzaj,
            typ: typ
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    };


    return (
        <>
        <h3>Dodaj instrument</h3>
        <form>
            <label>Nazwa:</label>
            <input type="text" value={nazwa} onChange={event => setNazwa(event.target.value)}/>
            <label>Rodzaj:</label>
            <input type="text" value={rodzaj} onChange={event => setRodzaj(event.target.value)}/>
            <label>Typ:</label>
            <input type="text" value={typ} onChange={event => setTyp(event.target.value)}/>

            <input type='submit' value='Zapisz' onClick={saveToDb}/>
        </form>
        </>
    );
}

export default AddInstrument;