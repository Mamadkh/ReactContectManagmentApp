

import { Purple } from "../../helpers/Colors";
import { useContext } from 'react';
import { ContactContext } from "../../context/contactContext";

const SearchContacts = () => {
    const {contactQuery,contactSearch} = useContext(ContactContext);
    return (
        <div className="input-group mx-2 w-75 d-flex" dir="ltr">
            <span className="input-group-text" id="basic-addon1"
                style={{ backgroundColor: Purple }}>
                <i className="fa fa-search"></i>
            </span>
            <input
                type="text"
                className="form-control"
                value={contactQuery.text}
                onChange={contactSearch}
                placeholder="Search Contact"
                aria-label="Search"
                aria-describedby="basic-addon1" />
        </div>
    )
}

export default SearchContacts;