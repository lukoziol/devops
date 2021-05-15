import React, {useState, useEffect} from "react";
import axios from 'axios';
import DelInstruments from "./DelInstruments";

const ShowInstruments = (props) => {

    const [show, setShow] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/instrumenty/')
            .then(response => setShow(response.data))
            .catch(error => console.log(error));
    }, []);



    const getId = (event) => {
        props.changeParentHandlerId(event.target.name);
    }

    const getIdToUpdate = (event) => {
        props.changeParentHandlerUpdate(event.target.name);
    }

    
    
    const Instrumenty = (props) => {
        return (
            <>
                <tr>
                    <td>{props.instruments.id}</td>
                    <td>{props.instruments.nazwa}</td>
                    <td>{props.instruments.rodzaj}</td>
                    <td>{props.instruments.typ}</td>
                    <td>
                        <button onClick={getId} name={props.instruments.id}>show</button>
                        <button onClick={getIdToUpdate} name={props.instruments.id}>update</button>
                        <DelInstruments id={props.instruments.id}/>
                    </td>
                </tr>
            </>
        );
    }

    
    return (
        <>
            <h2>Instrumenty</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nazwa</th>
                        <th>Rodzaj</th>
                        <th>Typ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {show.map(instruments => (<Instrumenty instruments={instruments} key={instruments.id}></Instrumenty  >))}
                </tbody>
            </table>
        </>
    );
}

export default ShowInstruments;
