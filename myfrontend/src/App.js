import './App.css';
import {useState} from "react";
import AddInstruments from './AddInstruments.js';
import DelInstruments from './DelInstruments.js';
import GetInstruments from  './GetInstruments.js';
import ShowInstruments from './ShowInstruments.js'
import UpdateInstruments from './UpdateInstruments.js';


function App() {

  const [id, setId] = useState(0);
  const [idInstrumentu, setIdInstrumentu] = useState([]);

  const PokazGetInstruments = (props) => {
    return <GetInstruments id={props.id} />
  }

  const PokazUpdateInstruments = (props) => {
    return <UpdateInstruments id={props.id} />
  }

  return (
    <div className="prezentacja">
      <AddInstruments changeParentHandlerId={setId} changeParentHandlerUpdate={setIdInstrumentu}/>
      <ShowInstruments />
      <PokazGetInstruments id={id} />
      <DelInstruments />
      <PokazUpdateInstruments id={idInstrumentu} />
      
    </div>
  );

}

export default App;

