import React, {useState, useEffect} from "react"; 
import axios from 'axios'; 

const GetInstruments = (props) => { 

    const [instruments, setInstruments] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5050/instrumenty/${props.id}`)
            .then(response => setInstruments(response.data))
            .catch(error => console.log(error));
    }, [props.id]);


    return (
        <div className="prezentation">
            <h2>Informacje o instrumencie</h2>
            <h5>id: {props.id}</h5>
            <h4>Nazwa: {instruments.nazwa}</h4>
            <h4>Rodzaj: {instruments.rodzaj}</h4>
            <h4>typ instrumentu: {instruments.typ}</h4>
        </div>
    );

}
export default GetInstruments;
