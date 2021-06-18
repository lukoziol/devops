import React, {useState, useEffect} from "react";
import axios from 'axios';

const EditInstrument = (props) => {
    
    const [nazwa, setNazwa] = useState("");
    const [rodzaj, setRodzaj] = useState("");
    const [typ, setTyp] = useState("");

    useEffect(() => {
        axios.get(`api/instrumenty/${props.id}`)
            .then(response => {
                setNazwa(response.data.nazwa);
                setRodzaj(response.data.rodzaj);
                setTyp(response.data.typ);
            })
            .catch(error => console.log(error));
    }, [props.id]);

    const saveToDb = (event) => {
        axios.put(`api/instrumenty/edytuj/${props.id}`, {
            nazwa: nazwa,
            rodzaj: rodzaj,
            typ: typ
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    };

    return (
        <>
        <h3>Aktualizuj instrument</h3>
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

export default EditInstrument;