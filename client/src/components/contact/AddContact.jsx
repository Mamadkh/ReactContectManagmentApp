
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { Link } from "react-router-dom";
import { Spinner } from "..";
import { Comment, Green, Purple } from "../../helpers/Colors";

const AddContact = () => {
    const { loading, groups, contact, onContactChange, createContact } = useContext(ContactContext)
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="p-3">
                        <img
                            src={require("../../assets/man-taking-note.png")}
                            className="img-fluid "
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "140px",
                                left: "100px",
                                opacity: "50%",
                            }}
                        />
                        <div className="container" dir="rtl">
                            <div className="row ">
                                <div className="col">
                                    <p
                                        className="h4 fw-bold text-center"
                                        style={{ color: Green }}
                                    >
                                        Create New user
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: Green }} />
                            <div className="row mt-5">
                                <div className="col-lg-4 col-md-6 col-sm-12" dir="ltr">
                                    <form onSubmit={createContact}>
                                        <div className="mb-2">
                                            <input
                                                name="fullname"
                                                type="text"
                                                value={contact.fullname}
                                                onChange={onContactChange}
                                                className="form-control"
                                                placeholder="Full Name"
                                                required={true}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                type="text"
                                                value={contact.photo}
                                                onChange={onContactChange}
                                                className="form-control"
                                                required={true}
                                                placeholder="Photo"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="mobile"
                                                type="number"
                                                value={contact.mobile}
                                                onChange={onContactChange}
                                                className="form-control"
                                                required={true}
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="email"
                                                name="email"
                                                value={contact.email}
                                                onChange={onContactChange}
                                                className="form-control"
                                                required={true}
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                name="job"
                                                value={contact.job}
                                                onChange={onContactChange}
                                                className="form-control"
                                                required={true}
                                                placeholder="Job"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <select
                                                name="group"
                                                value={contact.group}
                                                onChange={onContactChange}
                                                required={true}
                                                className="form-control"
                                            >
                                                <option value="">Choose Groups</option>
                                                {groups.length > 0 && groups.map((group) => (
                                                    <option key={group.id} value={group.id}>
                                                        {group.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mx-2">
                                            <input
                                                type="submit"
                                                className="btn"
                                                style={{ backgroundColor: Purple }}
                                                value="New User"
                                            />
                                            <Link
                                                to={"/contacts"}
                                                className="btn mx-2"
                                                style={{ backgroundColor: Comment }}
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default AddContact;
