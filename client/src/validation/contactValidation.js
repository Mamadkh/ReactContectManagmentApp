import * as yup from 'yup';


export const contactSchema = yup.object().shape({
    fullname: yup.string().required("Enter Full name is require"),
    photo: yup.string().url("Photo address is not valid").required("Enter photo's address is require"),
    mobile: yup.number().required("Enter Phone number is require"),
    email: yup.string().email("Email address is not valid").required("Enter Email is require"),
    job: yup.string().nullable(),
    group: yup.string().required("choose group is require")
})