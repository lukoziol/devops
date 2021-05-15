import React, {useState} from 'react';
import axios from 'axios';

const AddInstruments = (props) => {

    const [nazwa, setNazwa] = useState("");
    const [rodzaj, setRodzaj] = useState("");
    const [typ, setTyp] = useState("");
    
    const submit = (event) => {
        
        axios.post('http://localhost:5050/instrumenty/dodaj', {
            nazwa: nazwa,
            rodzaj: rodzaj,
            typ: typ,
            
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });

    };


    return (
        <div className="prezentacja">
            <h2>Dodaj Instrumenty do listy</h2>
            <form>
                <input type='text' placeholder='nazwa' value={nazwa} onChange={event => setNazwa(event.target.value)} /><br/>
                <input type='text' placeholder='rodzaj' value={rodzaj} onChange={event => setRodzaj(event.target.value)} /><br/>
                <input type='text' placeholder='typ' value={typ} onChange={event => setTyp(event.target.value)} /><br/>
                
                <input type='submit' value='AddInstruments' onClick={submit} />
            </form>
        </div>
    );


};

export default AddInstruments;
