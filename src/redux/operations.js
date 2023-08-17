import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts } from "addContact";
import { deleteContacts } from "deleteContact";
import { fetchContacts } from "fetchContacts";

export const fetchPhoneBook = createAsyncThunk(
    'phonebook/fetchContacts',
    async (_, thunkAPI) => {
        try{
            const response = await fetchContacts();
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }  
      
    }
  )
export const addPhoneBook = createAsyncThunk(
    'phonebook/addContacts',
    async ({name, number}, thunkAPI ) => {
        try{
            const response = await addContacts(name, number);
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const deleteFromPhoneBook = createAsyncThunk(
    'phonebook/deleteContacts',
    async (id, thunkAPI ) => {
        try{
            const response = await deleteContacts(id);
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)