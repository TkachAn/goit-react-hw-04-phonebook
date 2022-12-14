import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from '../contactItem/contactItem';

function ContactList({ contacts, onDel }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <ContactItem user={name} tel={number} onDel={onDel} delId={id} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDel: PropTypes.func.isRequired,
};

export default ContactList;
