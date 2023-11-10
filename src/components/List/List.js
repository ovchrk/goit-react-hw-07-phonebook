import React from 'react';
import css from '../List/List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const List = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={css.box}>
          {filteredContacts?.map(({ id, name, phone }) => (
            <li key={id} className={css.contacts__item}>
              &#8728; {name}: {phone}{' '}
              <button
                type="button"
                className={css.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.box}>Contacts not found</div>
      )}
    </div>
  );
};
