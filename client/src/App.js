

import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'

import {
  AddContact,
  EditContact,
  Contacts,
  Navbar,
  ViewContact,
} from './components';

import {
  getAllContacts,
  getAllGroups,
  createContact
} from '../src/services/contactService'

const App = () => {

  const [loading, setLoading] = useState(false);
  const [forceRender, setForceRender] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });

  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: contactsData } = await getAllContacts();

        setContacts(contactsData);
        
        setLoading(false)

      } catch (err) {
        console.log(err.message);
        setLoading(false)
      }
    }
    fetchData();
  }, [forceRender])

  const createContactForm = async event => {
    event.preventDefault();
    try {
      const { status } = await createContact(getContact);

      if (status === 201) {
        setContact({});
        setForceRender(!forceRender);
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const setContactInfo = (event) => {
    setContact({
      ...getContact,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Navigate to='/Contacts' />} />
        <Route path='/contacts' element={<Contacts contacts={getContacts} loading={loading} />} />
        <Route
          path="/contacts/add"
          element={
            <AddContact
              loading={loading}
              setContactInfo={setContactInfo}
              contact={getContact}
              groups={getGroups}
              createContactForm={createContactForm}
            />
          }
        />
        <Route path='/contacts/:contactId' element={<ViewContact />} />
        <Route path='/contacts/editcontact/:contactId' element={<EditContact />} />

      </Routes>

    </div>
  );
}

export default App;
