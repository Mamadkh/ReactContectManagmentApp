
import { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";

import { ContactContext } from "../../context/contactContext";
import { getContact, getGroup } from "../../services/contactService";
import { Spinner } from "../";
import { CurrentLine, Cyan, Purple } from "../../helpers/Colors";

const ViewContact = () => {
    const { contactId } = useParams();

    const [state, setState] = useState({
        contact: {},
        group: {},
    });
    const { loading, setLoading } = useContext(ContactContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: contactData } = await getContact(contactId);
                const { data: groupData } = await getGroup(contactData.group);

                setLoading(false);
                setState({
                    ...state,
                    contact: contactData,
                    group: groupData,
                });
            } catch (err) {
                console.log(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const { contact, group } = state;

    return (
        <>
            <section className="view-contact-intro p3">
                <div className="container">
                    <div className="row my-2 text-center">
                        <p className="h3 fw-bold" style={{ color: Cyan }}>
                            Contact Information 
                        </p>
                    </div>
                </div>
            </section>

            <hr style={{ backgroundColor: Cyan }} />

            {loading ? (
                <Spinner />
            ) : (
                <>
                    {Object.keys(contact).length > 0 && (
                        <section className="view-contact mt-e">
                            <div
                                className="container p-2"
                                style={{ borderRadius: "1em", backgroundColor: CurrentLine }}
                            >
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <img
                                            src={contact.photo}
                                            alt=""
                                            className="img-fluid rounded"
                                            style={{ border: `1px solid ${Purple}` }}
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-dark">
                                                Full Name :{" "}
                                                <span className="fw-bold">{contact.fullname}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                Phone Number :{" "}
                                                <span className="fw-bold">{contact.mobile}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                Email: <span className="fw-bold">{contact.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                Job: <span className="fw-bold">{contact.job}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                Group: <span className="fw-bold">{group.name}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <Link
                                            to={"/contacts"}
                                            className="btn"
                                            style={{ backgroundColor: Purple }}
                                        >
                                            Back to home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </>
            )}
        </>
    );
};

export default ViewContact;



// import { Cyan, CurrentLine, Purple } from "../../helpers/Colors"
// import { useState, useEffect, useContext } from "react";
// import { ContactContext } from "../../context/contactContext";

// import { Link, useParams } from "react-router-dom";

// import { getContact, getGroup } from "../../services/contactService";
// import { Spinner } from "../";

// const ViewContact = () => {
//     const { contactId } = useParams();

//     const [state, setState] = useState({
//         contact: {},
//         group: {},
//     });
//     const [loading, setLoading] = useContext(ContactContext);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {

//                 setLoading(true);

//                 const { data: contactData } = await getContact(contactId);
//                 const { data: groupData } = await getGroup(contactData.group);

//                 setLoading(false);
//                 setState({
//                     ...state,
//                     contact: contactData,
//                     group: groupData,
//                 });
//             } catch (err) {
//                 console.log(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const { contact, group } = state;

//     return (
//         <>
//             <section className="view-contact-intro p3">
//                 <div className="container">
//                     <div className="row my-2 text-center">
//                         <p className="h3 fw-bold" style={{ color: Cyan }}>
//                             Contact Information
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <hr style={{ backgroundColor: Cyan }} />

//             {loading ? (
//                 <Spinner />
//             ) : (
//                 <>
//                     {Object.keys(contact).length > 0 && (
//                         <section className="view-contact mt-e">
//                             <div
//                                 className="container p-2"
//                                 style={{ borderRadius: "1em", backgroundColor: CurrentLine }}
//                             >
//                                 <div className="row align-items-center">
//                                     <div className="col-md-3">
//                                         <img
//                                             src={contact.photo}
//                                             alt=""
//                                             className="img-fluid rounded"
//                                             style={{ border: `1px solid ${Purple}` }}
//                                         />
//                                     </div>
//                                     <div className="col-md-9">
//                                         <ul className="list-group">
//                                             <li className="list-group-item list-group-item-dark">
//                                                 Full Name :{" "}
//                                                 <span className="fw-bold">{contact.fullname}</span>
//                                             </li>
//                                             <li className="list-group-item list-group-item-dark">
//                                                 Phone Number :{" "}
//                                                 <span className="fw-bold">{contact.mobile}</span>
//                                             </li>
//                                             <li className="list-group-item list-group-item-dark">
//                                                 Email : <span className="fw-bold">{contact.email}</span>
//                                             </li>
//                                             <li className="list-group-item list-group-item-dark">
//                                                 Job: <span className="fw-bold">{contact.job}</span>
//                                             </li>
//                                             <li className="list-group-item list-group-item-dark">
//                                                 Group: <span className="fw-bold">{group.name}</span>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="row my-2">
//                                     <div className="d-grid gap-2 col-6 mx-auto">
//                                         <Link
//                                             to={"/contacts"}
//                                             className="btn"
//                                             style={{ backgroundColor: Purple }}
//                                         >
//                                             Back
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     )}
//                 </>
//             )}
//         </>

//     )
// }

// export default ViewContact;