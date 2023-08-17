import axios from 'axios';

export const addContacts = (name='', number='')=>{
    return axios.post(`https://64d71df32a017531bc12fbc2.mockapi.io/phonebook/contacts`,{name, number});
}