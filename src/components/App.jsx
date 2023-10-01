import React, { useEffect } from 'react';
import { Container } from './Container';
import { Form } from './Form';
import { Filter } from './Filter';
import { List } from './List';
import { Loading } from './Loading';
import { Error } from './Error';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<Container>
          <h1>Phonebook</h1>
    <Form></Form>
        <h2>Contacts</h2>
    <Filter></Filter>
    {isLoading && <Loading></Loading>}
    {contact?.length > 0 && <List></List>}
    {error && <Error></Error>}
    
    </Container> )
}
export { App };