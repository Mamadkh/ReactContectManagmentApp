

import SearchContacts from './contact/SearchContacts';
import { Purple, Background } from "../helpers/Colors"
import { useLocation } from 'react-router-dom';



const Navbar = () => {
    const location = useLocation()


    return (
        <nav className="navbar navbar-dark navbar-expand-md navbar-expand-sm shadow-lg"
            style={{ backgroundColor: Background }}>
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <div className=' navbar-brand'>
                            <i className="fa fa-id-badge" style={{ color: Purple }} />{" "}
                            Contact Managment Application{" "}
                            <span style={{ color: Purple }}>Contact</span>
                        </div>
                    </div>
                    {location.pathname === "/contacts" ? (
                        <div className="col">
                            <SearchContacts />
                        </div>
                    ) : null}

                </div>
            </div>
        </nav>
    )
}

export default Navbar