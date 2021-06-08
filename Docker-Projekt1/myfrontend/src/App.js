import {useState} from "react";

import GetInstruments from './GetInstruments';
import AddInstrument from './AddInstrument';
import EditInstrument from './EditInstrument';
import DetailInstrument from './DetailInstrument';

function App() {

    const [id, setId] = useState(0);
    const [idEdit, setIdEdit] = useState([]);

    const DetailInstrumentFunction = (props) => {
        return <DetailInstrument id={props.id}/>
    }
    
    const EditInstrumentFunction = (props) => {
        return <EditInstrument id={props.id} />;
    }


    return (
        <div>
            <h2>Łukasz Kozioł Frontend</h2>

            <AddInstrument/>

            <EditInstrumentFunction id={idEdit}/>

            <DetailInstrumentFunction id={id}/>

            <GetInstruments moveIdForEdit={setIdEdit} moveIdForDetail={setId}/>
        </div>
    )

}

export default App;