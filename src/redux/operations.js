import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts } from "addContact";
import { deleteContacts } from "deleteContact";
import { fetchContacts } from "fetchContacts";
import axios from 'axios';
import Notiflix from "notiflix";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem("token", JSON.stringify(token));  
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        
      try {
        const res = await axios.post('/users/signup', credentials);
        // After successful registration, add the token to the HTTP header
        setAuthHeader(res.data.token);
        Notiflix.Notify.success('Created New User');
        return res.data;
      } catch (error) {
        Notiflix.Notify.failure(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        
      try {
        const res = await axios.post('/users/login', credentials);
        // After successful registration, add the token to the HTTP header
        setAuthHeader(res.data.token);
        Notiflix.Notify.success('Login success');
        return res.data;
      } catch (error) {
        Notiflix.Notify.failure(error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logout = createAsyncThunk(
    'auth/logout',
    async (credentials, thunkAPI) => {
        
      try {
        const res = await axios.post('/users/logout', credentials);
        // After successful registration, add the token to the HTTP header
        axios.defaults.headers.common.Authorization = '';
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const token = localStorage.getItem("token");
      token && setAuthHeader(JSON.parse(token));
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