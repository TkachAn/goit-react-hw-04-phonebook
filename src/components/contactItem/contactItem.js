import PropTypes from 'prop-types';
import css from './contactItem.module.css';

function ContactItem({ user, tel, onDel, delId }) {
  return (
    <div className={css.info}>
      {user}: {tel}
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          onDel(delId);
        }}
      >
        X
      </button>
    </div>
  );
}
ContactItem.propTypes = {
  delId: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  onDel: PropTypes.func.isRequired,
};
export default ContactItem;
