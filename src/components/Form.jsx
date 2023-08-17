import { useDispatch, useSelector } from "react-redux";
import { addPhoneBook } from "../redux/operations";
import css from './Form.module.css';
import Notiflix from 'notiflix';
import { useState } from "react";
import { contacts as contactPhone } from "redux/selector";


export const Form = ()=>{
    const [name, setName] = useState('');
    const [number, setPhone] = useState('');
    const dispatch = useDispatch();
    
    const contacts = useSelector(contactPhone);
    function handleSubmit(e){
        e.preventDefault();
        
        if (name.trim()&&number.trim()){
          if (!contacts.find(el=>el.name===String(name)))
            dispatch(addPhoneBook({name, number}));
          else Notiflix.Notify.failure('Dublicate record');
                   
        }else Notiflix.Notify.failure('Empty field');
        setName('');
        setPhone('');
    }
    function handlerChange({target:{value, name}}){
      switch(name){
        case 'name': setName(value);break;
        case 'phone': setPhone(value);break;
        default: break;
      }
      
    }

    return(
        <form className={css.common} onSubmit={handleSubmit} >
        <label htmlFor="name">
        <span>Name</span>
          <input type="text" name="name" id="name" onChange={handlerChange} value={name}/>
        </label>
        <label htmlFor="phone">
        <span>Number</span> 
          <input type="text" name="phone" id="phone" onChange={handlerChange} value={number}/>
        </label>
        <button type="submit" className={css.btnForm}>Add</button>
      </form>
    )
}