import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { FormLog } from 'components/FormLog';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { refresh } from 'redux/operations';

export const Navbar = ({onOpen})=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(refresh())

    },[dispatch])
    return(
      <>
        <Box w='90%' ml='auto' mr='auto' mt='20px' mb='10px' display='flex' alignItems="center" justifyContent="space-between" bg='lightBlue' borderRadius='md' p={4} color='white'>
        
        <Text fontSize='24px' fontWeight='700'><Link to='/'>Phonebook</Link></Text>
        <Flex>
          <FormLog/>
        <Button  colorScheme='purple' type="button" onClick={onOpen}>Register</Button>
        <Button ml='10px' colorScheme='facebook' type="button" onClick={()=>navigate('/')}>Home</Button>
        </Flex>
      </Box>
      <Outlet/>
      </>
    )
}