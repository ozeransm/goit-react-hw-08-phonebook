import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./auth/auth";
import { addPhoneBook, deleteFromPhoneBook, fetchPhoneBook, refresh } from "./contacts/contacts";


const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    filter: "",
    isActive: false,
    isRefresh: true,
    user: null,
    token: null
}

export const reducerPhonebook = createSlice({
name: 'phonebook',
initialState,
reducers:{
    'filter': (state, {payload:{filter}}) => {
        state.filter = filter;        
    }
},
extraReducers: (builder)=>{
    builder
    .addCase(fetchPhoneBook.pending, (state, action)=>{
        state.isLoading = true;
    })
    .addCase(fetchPhoneBook.fulfilled, (state, action) => {
        
        state.contacts = [...action.payload];
        state.isLoading = false;
        state.error = null;
    })
    .addCase(fetchPhoneBook.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(addPhoneBook.pending, (state, action)=>{
        state.isLoading = true;
    })
    .addCase(addPhoneBook.fulfilled, (state, action)=>{
        state.contacts.push(action.payload);
        state.isLoading = false;
        state.error = null;
    })
    .addCase(addPhoneBook.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(deleteFromPhoneBook.pending, (state, action)=>{
        state.isLoading = true;
    })
    .addCase(deleteFromPhoneBook.fulfilled, (state, action)=>{
        state.contacts = state.contacts.filter((el)=>el.id!==action.payload.id)
        state.isLoading = false;
        state.error = null;
    })
    .addCase(deleteFromPhoneBook.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.payload;
    })
    .addCase(register.fulfilled, (state, action)=>{
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isActive = true;
    })
    .addCase(login.fulfilled, (state, action)=>{
        
        state.user = action.payload.user;
        state.token = action.payload.token; 
        state.isActive = true;
    })
    .addCase(logout.fulfilled, (state, action)=>{
        state.isActive = false;
    })
    .addCase(refresh.pending, (state, action)=>{
        state.isRefresh = true;
    })
    .addCase(refresh.fulfilled,(state, action)=>{
        
        state.user = action.payload;
        state.isActive = true;
        state.isRefresh = false;
    })
    .addCase(refresh.rejected, (state, action)=>{
        state.isRefresh = false;
    })
}
});

export const reducer = combineReducers({ book: reducerPhonebook.reducer });

export const { filter } = reducerPhonebook.actions;

