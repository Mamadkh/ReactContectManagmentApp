
import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
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
import { getAllContacts, getAllGroups } from '../src/services/contactService'
import axios from 'axios';



const App = () => {

  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: contactsData } = await getAllContacts();
        const { data: groupData } = await getAllGroups();

        setContacts(contactsData);
        setGroups(groupData);

        setLoading(false)

      } catch (err) {
        console.log(err.message);
        setLoading(false)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Navigate to='/Contacts' />} />
        <Route path='/contacts' element={<Contacts contacts={getContacts} loading={loading} />} />
        <Route path='/contacts/add' element={<AddContact  loading={loading}/>} />
        <Route path='/contacts/:contactId' element={<Contact />} />
        <Route path='/contacts/editcontact/:contactId' element={<EditContact />} />

      </Routes>

    </div>
  );
}

export default App;
