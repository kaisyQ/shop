import * as Yup from 'yup';

const schema = Yup.object({
    sellSofaName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    sellSofaEmail: Yup.string().email('Incorrect email').required('Required'),
    sellSofaPhoneNumber: Yup.string().required('Required'),
    sellSofaBrand: Yup.string().required('Required'),
    sellSofaMessage: Yup.string().min(10, 'Must be more than 10 characters').required('Required')
})

export default schema;