import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { setAuthHeader } from "redux/auth/auth";

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const token = localStorage.getItem("token");
      token && setAuthHeader(token);
      // console.log(token)
      try {
        const res = await axios.get('/users/current');
        // After successful registration, add the token to the HTTP header
       
        return res.data;
      } catch (error) {
          return thunkAPI.rejectWithValue('');
      }
    }
  );

export const fetchPhoneBook = createAsyncThunk(
    'phonebook/fetchContacts',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get('/contacts');//fetchContacts();
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
            const response = await axios.post('/contacts',{"name":name,"number":number});//addContacts(name, number);
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
            const response = await axios.delete(`/contacts/${id}`);//deleteContacts(id);
            return response.data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)