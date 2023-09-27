import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const initialState = {
  contact: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    searchByName(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contact = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addContact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contact.push(action.payload);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteContact.pending, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      const index = state.contact.findIndex(userId => userId.id === payload.id);
      state.contact.splice(index, 1);
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { searchByName } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
