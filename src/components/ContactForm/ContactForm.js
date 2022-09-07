import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

function ContactForm() {
  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  //
  // state = {
  //   name: '',
  //   number: '',
  // };
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
  handleChange = e => {
    const { value } = e.currentTarget.name;
    // this.setState({ [name]: value });
		setName(value);
  };
  handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(this.state
			
			);
    // this.setState({ name: '', number: '' });
		setName('');
		setNumber('');
  };
	useEffect(() => {
    /**/
  }, [name,number]);
  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="enter your name, please."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="enter your phone number, please."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
export default ContactForm;
