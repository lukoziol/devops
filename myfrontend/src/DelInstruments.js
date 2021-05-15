import React from 'react';
import axios from 'axios';

const DelInstruments = (props) => {

    const submit = (event) => {
        axios.delete(`http://localhost:5050/instrumenty/delete/${props.id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <>
            <form>
                <input type='submit' value='delete' onClick={submit} />
            </form>
        </>
    );

}

export default DelInstruments;
