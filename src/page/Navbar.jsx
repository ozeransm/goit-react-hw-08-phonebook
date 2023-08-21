import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { FormLog } from 'components/FormLog';
import { Outlet } from 'react-router-dom';

export const Navbar = ({onOpen})=>{
 
    return(
      <>
        <Box w='90%' ml='auto' mr='auto' mt='20px' mb='10px' display='flex' alignItems="center" justifyContent="space-between" bg='lightBlue' borderRadius='md' p={4} color='white'>
        
        <Text fontSize='24px' fontWeight='700'>Phonebook</Text>
        <Flex>
          <FormLog/>
        <Button  colorScheme='purple' type="button" onClick={onOpen}>Register</Button>
        </Flex>
      </Box>
      <Outlet/>
      </>
    )
}