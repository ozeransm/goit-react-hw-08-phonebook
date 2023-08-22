import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Notiflix from "notiflix";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        
      try {
        const res = await axios.post('/users/signup', credentials);
        // After successful registration, add the token to the HTTP header
        setAuthHeader(res.data.token);
        localStorage.setItem("token", res.data.token);
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
        localStorage.setItem("token", res.data.token);
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
        localStorage.removeItem("token");
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
