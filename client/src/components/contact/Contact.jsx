
import {CurrentLine, Purple, Orange , Red ,Cyan} from "../../helpers/Colors"



const Contact = ({Contact}) => {
    return (
        <div className='col-md-6'>
            <div style={{ backgroundColor: CurrentLine }} className='card my-2'>
                <div className='card-body '>
                    <div className='row align-items-center d-flex justify-content-around'>
                        <div className=' col-md-4 col-sm-4'>
                            <img src="{Contact.photo}" alt={Contact.fullname} style={{ border: `1px solid ${Purple}` }}
                                className=" img-fluid rounded" />
                        </div>
                        <div className='col-md-7 col-sm-7'>
                            <ul className='list-group'>
                                <li className=' list-group-item list-group-item-dark'>
                                    Full Name :{' '}
                                    <span className='fw-bold'> {Contact.fullname}</span>
                                </li>
                                <li className=' list-group-item list-group-item-dark'>
                                    Phone Number :{' '}
                                    <span className='fw-bold'>{Contact.mobile}</span>
                                </li>
                                <li className=' list-group-item list-group-item-dark'>
                                    Email :{' '}
                                    <span className='fw-bold'>{Contact.email} </span>
                                </li> 
                            </ul>
                        </div>
                        <div className=' col-md-1 col-sm-1 d-flex flex-column align-items-center'>
                            <button className=' btn my-1' style={{ backgroundColor: Orange }}>
                                <i className='fa fa-eye' />
                            </button>

                            <button className=' btn my-1' style={{ backgroundColor: Cyan }}>
                                <i className='fa fa-pencil' />
                            </button>

                            <button className=' btn my-1' style={{ backgroundColor: Red }}>
                                <i className='fa fa-trash' />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;