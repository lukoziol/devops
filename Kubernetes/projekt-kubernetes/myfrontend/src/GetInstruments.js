import React, {useState, useEffect} from "react";
import axios from 'axios';
import DeleteInstrument from './DeleteInstrument';

const GetInstruments = (props) => {
    const [instruments, setInstruments] = useState([]);

    useEffect(() => {
        axios.get('api/')
            .then(response => setInstruments(response.data))
            .catch(error => console.log(error));
    }, []);

    const getIdForEdit = (event) => {
        props.moveIdForEdit(event.target.name);
    }

    const EditButton = (props) => {
        return (
            <>
                <button type="button" onClick={getIdForEdit} name={props.id}>Aktualizuj</button>
            </>
        );
    }

    const getIdForDetail = (event) => {
        props.moveIdForDetail(event.target.name);
    }

    const DetailButton = (props) => {
        return (
            <>
                <button type="button" onClick={getIdForDetail} name={props.id}>Szczegóły</button>
            </>
        )
    }


    const RowGenerate = (props) => {
        return (
            <>
            <tr>
                <td>{props.instrument.id}</td>
                <td>{props.instrument.nazwa}</td>
                <td>{props.instrument.rodzaj}</td>
                <td>{props.instrument.typ}</td>
                <td>
                <form>
                    <EditButton id={props.instrument.id}/>
                    <DetailButton id={props.instrument.id}/>
                    <DeleteInstrument id={props.instrument.id}/>
                </form>
                </td>
            </tr>
            </>
        );
    }


    return (
        <>
        <h1>Instrumenty</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>nazwa</th>
                    <th>rodzaj</th>
                    <th>typ</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {instruments.map(instrument => (<RowGenerate instrument={instrument} key={instrument.id}></RowGenerate>) )}
            </tbody>
        </table>
        </>
    );

}


export default GetInstruments;