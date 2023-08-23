import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { FormLog } from 'components/FormLog';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { refresh } from '../redux/contacts/contacts';
import { isActive } from 'redux/selector';

export const Navbar = ({onOpen})=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logined = useSelector(isActive);
    useEffect(()=>{
      dispatch(refresh())

    },[dispatch])
    return(
      <>
        <Box w='90%' ml='auto' mr='auto' mt='20px' mb='10px' display='flex' flexWrap='wrap' alignItems="center" justifyContent="space-between" bg='lightBlue' borderRadius='md' p={4} color='white'>
        
        <Text fontSize='24px' fontWeight='700'><Link to='/'>Phonebook</Link></Text>
        <Flex>
          <FormLog num={101}/>
        {!logined && <Button  colorScheme='purple' type="button" onClick={onOpen}>Register</Button>}
        {logined && <Button ml='10px' colorScheme='facebook' type="button" onClick={()=>navigate('/')}>Home</Button>}
        {logined && <Button ml='10px' colorScheme='facebook' type="button" onClick={()=>navigate('/contacts')}>Contacts</Button>}
        
        </Flex>
      </Box>
      <Suspense>
        <Outlet/>
      </Suspense>
      </>
    )
}