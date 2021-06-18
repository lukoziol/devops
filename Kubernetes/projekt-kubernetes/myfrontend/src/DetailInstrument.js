import React, {useState, useEffect} from "react";
import axios from 'axios';

const DetailInstrument = (props) => {

    const [instrument, setInstrument] = useState([]);


    useEffect(() => {
        axios.get(`api/instrumenty/${props.id}`)
            .then(response => setInstrument(response.data))
            .catch(error => console.log(error));
    }, [props.id]);


    return (
        <>
        <h3>Szczegóły instrumentu</h3>
        <p>{props.id}</p>
        <p>{instrument.nazwa}</p>
        <p>{instrument.rodzaj}</p>
        <p>{instrument.typ}</p>
        </>
    );
}

export default DetailInstrument;