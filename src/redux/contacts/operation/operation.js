import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import { addContact, deleteContact, getContacts } from '../../../servise/serviseApi';


// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// POST @ /contacts
export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const contacts = thunkAPI.getState().contacts.items;
    console.log(contacts);
    try {
      const response = await axios.post('/contacts', newContact);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

