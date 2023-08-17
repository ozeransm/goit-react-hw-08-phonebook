import axios from 'axios';

export const fetchContacts = ()=>{
    return axios.get('https://64d71df32a017531bc12fbc2.mockapi.io/phonebook/contacts');
}