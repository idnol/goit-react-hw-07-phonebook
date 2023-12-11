import { Formik, Form, Field } from 'formik';
// import { addContact } from '../../redux/contactSlice';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

export const ContactForm = ({submit}) => {
  const dispatch = useDispatch();
  const addNewContact = (contact) => {
    dispatch(addContact(contact))
  }
  return (<div>
    <h1>Phonebook</h1>
    <Formik
      initialValues = {{
        name: '',
        number: ''
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        addNewContact(values);
      }}>
      <Form>
        <Field id="name" name="name" placeholder="Name*" required />
        <Field id="tel" name="number" type="tel" placeholder="Your tel*" required />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  </div>)
}
