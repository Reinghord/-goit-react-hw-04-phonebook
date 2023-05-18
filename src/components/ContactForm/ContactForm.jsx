import PropTypes from 'prop-types';
import {
  Label,
  Button,
  FormStyled,
  FieldStyled,
  ErrorMessageStyled,
} from './ContactForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

let schema = yup.object({
  name: yup
    .string()
    .required('Please enter a name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Please enter a number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

function ContactForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = ({ name, number }) => {
    onSubmit(name, number);
    reset();
  };
  return (
    <FormStyled onSubmit={handleSubmit(onHandleSubmit)}>
      {' '}
      <Label htmlFor="name">Name</Label>
      <FieldStyled {...register('name')} />
      <ErrorMessageStyled>{errors.name?.message}</ErrorMessageStyled>
      <Label htmlFor="number">Number</Label>
      <FieldStyled {...register('number')} />
      <ErrorMessageStyled>{errors.number?.message}</ErrorMessageStyled>
      <Button type="submit">Add Contact</Button>
    </FormStyled>
  );
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
