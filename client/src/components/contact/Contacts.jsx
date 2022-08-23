
import { useContext } from 'react';
import { Pink, Orange, CurrentLine } from '../../helpers/Colors';
import { ContactContext } from '../../context/contactContext';
import Contact from './Contact';
import Spinner from '../Spinner';
import Notfound from '../../assets/no-found.gif'
import { Link } from 'react-router-dom';

const Contacts = () => {
    const { filteredContacts , loading, deleteContact } = useContext(ContactContext);
    return (
        <>
            <section className="container">
                <div className='grid'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h3 float-lg-start float-md-start float-sm-start'>
                                <Link
                                    to={"/contacts/add"}
                                    className="btn m-2"
                                    style={{ backgroundColor: Pink }}>
                                    Create New User
                                    <i className="fa fa-plus-circle mx-2" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> : (
                    <section className='container'>
                        <div className='row'>
                            {
                                filteredContacts.length > 0 ? filteredContacts.map((c) =>( <Contact key={c.id}
                                    deleteContact={() => deleteContact(c.id, c.fullName)} Contact={c} />
                                )):
                                    (
                                        <div className=' text-center py-5 ' style={{ backgroundColor: CurrentLine }}>
                                            <p className='h3' style={{ color: Orange }}>
                                                User Not Found ...
                                            </p>
                                            <img src={Notfound} alt="notFound" className=' w-25' />
                                        </div>
                                    )
                            }

                        </div>
                    </section>
                )
            }

        </>
    )
}

export default Contacts;