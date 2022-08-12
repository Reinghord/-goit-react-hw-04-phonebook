import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, onFilter }) {
  const onHandleSearch = e => {
    onFilter(e.target.value);
  };

  return (
    <>
      <label className={s.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onHandleSearch}
      />
    </>
  );
}

Filter.propTypes = { onFilter: PropTypes.func.isRequired };

export default Filter;
