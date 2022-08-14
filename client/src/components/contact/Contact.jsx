
import {CurrentLine, Purple, Orange , Red ,Cyan} from "../../helpers/Colors"

const Contact = () => {
    return (
        <div className='col-md-6'>
            <div style={{ backgroundColor: CurrentLine }} className='card my-2'>
                <div className='card-body '>
                    <div className='row align-items-center d-flex justify-content-around'>
                        <div className=' col-md-4 col-sm-4'>
                            <img src="https://via.placeholder.com/200" alt='' style={{ border: `1px solid ${Purple}` }}
                                className=" img-fluid rounded" />
                        </div>
                        <div className='col-md-7 col-sm-7'>
                            <ul className='list-group'>
                                <li className=' list-group-item list-group-item-dark'>
                                    Name and Family :{' '}
                                    <span className='fw-bold'> mohammadreza khorsand</span>
                                </li>
                                <li className=' list-group-item list-group-item-dark'>
                                    Phone Number :{' '}
                                    <span className='fw-bold'> 0014387221925</span>
                                </li>
                                <li className=' list-group-item list-group-item-dark'>
                                    Email :{' '}
                                    <span className='fw-bold'> mohammad.reza.khorsand@gmail.com</span>
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