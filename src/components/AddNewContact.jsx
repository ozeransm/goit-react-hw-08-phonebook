import { Box, FormControl, Input, Button, Text, Flex } from '@chakra-ui/react';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneBook } from 'redux/contacts/contacts';
import { contacts as contactPhone } from "redux/selector";
const AddNewContact = ()=>{
      const [name, setName] = useState('');
      const [number, setPhone] = useState('');
      const dispatch = useDispatch();
      
      const contacts = useSelector(contactPhone); 
      function handlerAddContact(e){
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
        <Box w='90%' ml='auto' mr='auto' mb='10px' display='flex' alignItems="center" justifyContent="center" bg='lightBlue' borderRadius='md' p={4} color='white'>
        
        <Text fontSize='20px' fontWeight='500'>Add new contact</Text>
        <Flex>
        <form onSubmit={handlerAddContact}>
        <FormControl display='flex' >
          
            <Input name="name" id="name" onChange={handlerChange} value={name} type='text' color='grey' placeholder='Name' w='100' ml='3' mr='3'/>
            
            <Input name="phone" id="phone" onChange={handlerChange} value={number} type='text' color='grey' placeholder='Phone Number' w='100'/>
            <Button ml='3' mr='3' colorScheme='teal' type="submit">Add Contact</Button>
            
        </FormControl>
        </form>
        
        </Flex>
      </Box>
    )
}
export default AddNewContact;