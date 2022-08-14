
import { useState } from 'react';
import './App.css';
import {
  AddContact,
  EditContact,
  SearchContacts,
  ViewContact,
  Contacts,
  Contact,
  Navbar,
  Spinner
} from './components';



const App = () => {

  const [loading, setLoading] = useState(false);
  const [getContacts, useContacts] = useState([]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Contacts contacts={getContacts} loading={loading}></Contacts>
    </div>
  );
}

export default App;
