
import { useState , useEffect } from 'react';
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
import axios from 'axios';



const App = () => {

  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups,setGroups] = useState([])

  useEffect (()=>{
    const fetchData = async() =>{
      try{
        setLoading(true);
        const {data : contactsData} = await axios.get("http://localhost:9000/contacts");
        const {data : groupData} = await axios.get("http://localhost:9000/groups");
        setContacts(contactsData);
        setGroups (groupData);
        setLoading(false)
      }catch (err){
        console.log(err.message);
        setLoading(false)
      }
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element= {<Navigate to = '/Contacts'/>}/> 
        <Route path='/contacts' element ={ <Contacts contacts = {getContacts} loading = {loading}/>} />
        <Route path='/contact/addcontact' element = {<AddContact/>} />
        <Route path = '/contact/:contactid' element = {<Contact/>} />
        <Route path = '/contact/editcontact/:contactid' element = {<EditContact/>} />

      </Routes>
      
    </div>
  );
}

export default App;
