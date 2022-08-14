
import { useState } from 'react';
import './App.css';
import Contacts from './components/contact/Contacts';
import Navbar from './components/Navbar';

const App = () => {

  const [loading , setLoading] = useState(false);
  const [getContacts, useContacts] = useState([]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Contacts contacts = {getContacts} loading = {loading}></Contacts>
    </div>
  );
}

export default App;
