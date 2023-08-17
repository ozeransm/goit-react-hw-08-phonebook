import axios from 'axios';

export const deleteContacts = (id='')=>{
    return axios.delete(`https://64d71df32a017531bc12fbc2.mockapi.io/phonebook/contacts/${id}`);
}