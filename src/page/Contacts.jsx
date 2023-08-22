import { useDispatch, useSelector } from "react-redux";
import { contacts, filterName } from "redux/selector";
import { ContactItem } from "../components/ContactItem";
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { useEffect } from "react";
import { fetchPhoneBook } from "redux/contacts/contacts";

const Contacts = ()=>{
    const phoneBook = useSelector(contacts);
    const filterPhone = useSelector(filterName);
    const filterPhoneBook = phoneBook.filter(({name})=>name?.toUpperCase().includes(filterPhone.toUpperCase()));
    // console.log(phoneBook)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchPhoneBook());
    },[dispatch])
    return(
      <Box display='flex' flexDirection='column' alignItems='center' w='70%' ml='auto' mr='auto' mt='10px' mb='20px' bg='lightBlue' borderRadius='md' p={4} color='white'>
        
        <Text fontSize='18px' fontWeight='600' >Contacts</Text>
          
          <div>
            {
              filterPhoneBook.map((el)=><ContactItem key={el.id} id={el.id} name={el.name} number={el.number}/>)
            }
          </div>
          
        
        </Box>

   
    )
}
Contacts.propTypes = {
  filterPhoneBook: PropTypes.arrayOf(
      PropTypes.shape({
          id:PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
      })
  ),
  filterPhone: PropTypes.string,
}
export default Contacts;