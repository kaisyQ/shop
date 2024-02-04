import * as Yup from 'yup';

const schema = Yup.object({
    contactName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    contactEmail: Yup.string().email('Incorrect email').required('Required'),
    contactPhoneNumber: Yup.string().required('Required'),
    contactMessage: Yup.string().min(10, 'Must be more than 10 characters').required('Required')
})

export default schema;