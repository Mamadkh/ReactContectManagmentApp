
import { Pink, Orange, CurrentLine } from '../../helpers/Colors';
import Contact from './Contact';
import Spinner from '../Spinner';
import Notfound from '../../assets/no-found.gif'
import { Link } from 'react-router-dom';

const Contacts = ({ contacts, loading }) => {
    return (
        <>
            <section className="container">
                <div className='grid'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h3'>
                                <Link
                                    to={"/contacts/add"}
                                    className="btn mx-2"
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
                                contacts.length > 0 ? contacts.map((c) => <Contact key={c.id} Contact={c} />
                                ) :
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