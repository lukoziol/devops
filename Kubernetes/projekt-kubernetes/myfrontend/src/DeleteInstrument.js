import React from "react";
import axios from 'axios';

const DeleteInstrument = (props) => {
    
    const deleteRow = (event) => {
        axios.delete(`api/instrumenty/usun/${props.id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    return (
        <>
        <button type="submit" onClick={deleteRow}>Usuń</button>
        </>
    );
}

export default DeleteInstrument;