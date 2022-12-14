
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { contactSchema } from "../../validation/contactValidation";
import { ContactContext } from "../../context/contactContext";
import { Spinner } from "../";
import { Comment, Green, Purple } from "../../helpers/Colors";


const AddContact = () => {
    const { loading, groups, createContact } = useContext(ContactContext);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="p-3">
                        <img className="img-fluid"
                            src={require("../../assets/man-taking-note.png")}
                            height="400px"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "130px",
                                left: "100px",
                                opacity: "50%",
                            }}
                        />
                        <div className="container" dir="rtl">
                            <div className="row">
                                <div className=" col-md-auto">
                                    <p
                                        className="h4 fw-bold text-center"
                                        style={{ color: Green }}
                                    >
                                        Create New Contatc
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: Green }} />
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <Formik
                                        initialValues={{
                                            fullname: "",
                                            photo: "",
                                            mobile: "",
                                            email: "",
                                            job: "",
                                            group: "",
                                        }}
                                        validationSchema={contactSchema}
                                        onSubmit={(values) => {
                                            createContact(values);
                                        }}
                                    >
                                        <Form>
                                            <div className="mb-2">
                                                <Field
                                                    name="fullname"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Full name"
                                                />
                                                <ErrorMessage
                                                    name="fullname"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="photo"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Photo"
                                                />

                                                <ErrorMessage
                                                    name="photo"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="mobile"
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                />

                                                <ErrorMessage
                                                    name="mobile"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                />

                                                <ErrorMessage
                                                    name="email"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="job"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Job"
                                                />

                                                <ErrorMessage
                                                    name="job"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <Field
                                                    name="group"
                                                    as="select"
                                                    className="form-control"
                                                >
                                                    <option value="">Choose Groups</option>
                                                    {groups.length > 0 &&
                                                        groups.map((group) => (
                                                            <option key={group.id} value={group.id}>
                                                                {group.name}
                                                            </option>
                                                        ))}
                                                </Field>

                                                <ErrorMessage
                                                    name="group"
                                                    render={(msg) => (
                                                        <div className="text-danger">{msg}</div>
                                                    )}
                                                />
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
                                        </Form>
                                    </Formik>
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
