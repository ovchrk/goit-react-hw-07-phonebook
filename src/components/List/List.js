import React from 'react';
import css from '../List/List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const List = () => {
  const contacts = useSelector(state => state.contacts.contact);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

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
