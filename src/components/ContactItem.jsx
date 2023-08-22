import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteFromPhoneBook } from "../redux/contacts/contacts";
import { Button, Text, Flex } from '@chakra-ui/react';
export const ContactItem = ({id, name, number})=>{
    const dispatch = useDispatch();
    
    return(
        <Flex>
            
                <Text mr='10' fontSize='15px' fontWeight='600' color='darkgray'>
                                {`Name: ${name}`}: {`Phone: ${number}`} 
                </Text>
                <Button ml='auto' mr='3' h='5' colorScheme='orange' type="button" onClick={()=>dispatch(deleteFromPhoneBook(id))}>Delete</Button>
            
        </Flex>
    )
}
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
    
  }
