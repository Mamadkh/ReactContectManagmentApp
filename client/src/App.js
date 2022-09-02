

import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { ContactContext } from "../src/context/contactContext";
import { useImmer } from "use-immer";
import _ from "lodash";
// import {toast,ToastContainer} from "react-toastify";
import toast , {Toaster} from "react-hot-toast"

import {
  AddContact,
  ViewContact,
  Contacts,
  EditContact,
  Navbar,
} from "./components";

import {
  getAllContacts,
  getAllGroups,
  createContact,
  deleteContact,
} from "./services/contactService";

import "./App.css";
import {
  CurrentLine,
  Foreground,
  Purple,
  Yellow,
  Comment,
} from "../src/helpers/Colors";


const App = () => {
  const [loading, setLoading] = useImmer(false);
  const [contacts, setContacts] = useImmer([]);
  const [filteredContacts, setFilteredContacts] = useImmer([]);
  const [groups, setGroups] = useImmer([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();

        setContacts(contactsData);
        setFilteredContacts(contactsData);
        setGroups(groupsData);

        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const createContactForm = async (values) => {

    try {
      setLoading((draft) => !draft);

      const { status, data } = await createContact(values);

      if (status === 201) {
        toast.success("Successfully Create")
        setContacts((draft) => { draft.push(data) });
        setFilteredContacts((draft) => { draft.push(data) });

        setLoading((prevLoading) => !prevLoading);
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err.message);
      setLoading((prevLoading) => !prevLoading);
    }
  };

  const confirmDelete = (contactId, contatcFullName) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div

            style={{
              backgroundColor: CurrentLine,
              border: `1px solid ${Purple}`,
              borderRadius: "1em",
            }}
            className="p-4"
          >
            <h1 style={{ color: Yellow }}>Delete Contact</h1>
            <p style={{ color: Foreground }}>
              Do You want to delete {contatcFullName} file?
            </p>
            <button
              onClick={() => {
                removeContact(contactId);
                onClose();
              }}
              className="btn mx-2"
              style={{ backgroundColor: Purple }}
            >
              Yes, Delete it!
            </button>
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: Comment }}
            >
              Cancle
            </button>
          </div>
        );
      },
    });
  };

  const removeContact = async (contactId) => {
    const contactsBackup = [...contacts];
    try {

      setContacts((draft) => draft.filter(c => c.id !== contactId));
      setFilteredContacts((draft) => draft.filter(c => c.id !== contactId));

      const { status } = await deleteContact(contactId);

      toast.error("successfully delete")

      if (status !== 200) {
        setContacts(contactsBackup);
        setFilteredContacts(contactsBackup);
      }
    } catch (err) {
      console.log(err.message);

      setContacts(contactsBackup);
      setFilteredContacts(contactsBackup);
    }
  };

  const contactSearch = _.debounce((query) => {
    if (!query) return setFilteredContacts([...contacts])

    setFilteredContacts((draft) =>
      draft.filter((c) =>
        c.fullname.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, 1000);

  return (
    <ContactContext.Provider value={{
      loading,
      setLoading,
      setContacts,
      setFilteredContacts,
      contacts,
      groups,
      filteredContacts,
      deleteContact: confirmDelete,
      createContact: createContactForm,
      contactSearch,
    }}>
      <div className="App">
        {/* <ToastContainer theme="colored"/> */}
        <Toaster/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/add" element={<AddContact />} />
          <Route path="/contacts/:contactId" element={<ViewContact />} />
          <Route path='/contacts/editcontact/:contactId' element={<EditContact />} />
        </Routes>
      </div>
    </ContactContext.Provider>

  );
};

export default App;
