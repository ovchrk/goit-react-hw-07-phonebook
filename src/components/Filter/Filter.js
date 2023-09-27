import React from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from 'redux/contactsSlice/contactsSlice';
import css from '../Filter/Filter.module.css';
// import PropTypes from 'prop-types';

export const Filter = () => {
  // const filter = useSelector(state => state.contacts.filter) ?? '';
  const dispatch = useDispatch();
  const filterOnChange = evt => {
    dispatch(searchByName(evt.currentTarget.value));
  };

  return (
    <label className={css.box}>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={filter}
        onChange={filterOnChange}
        className={css.input}
      />
    </label>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
