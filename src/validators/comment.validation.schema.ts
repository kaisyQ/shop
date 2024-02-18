import * as Yup from 'yup';

const schema = Yup.object({
    username: Yup.string().min(2, 'Must be more than 2 characters').required('Required'),
    review: Yup.string().required('Required'),
})

export default schema;