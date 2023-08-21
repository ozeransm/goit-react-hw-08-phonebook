import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"

   
    

export const HomePage = ()=>{
    const navigate = useNavigate()
    return(
    <>
       <Box display='flex' flexDirection='column' alignItems='center' w='70%' ml='auto' mr='auto' mt='10px' mb='20px' bg='lightBlue' borderRadius='md' p={4} color='white'>
            <Text fontSize='24px' fontWeight='700' >Home Page</Text>
            <Text fontSize='20px' fontWeight='500' >Please <Link to='/register' > register </Link> to platform or <Link to='/login'>enter login and password</Link></Text>
            <Flex>
            <Button colorScheme='purple' type="button" onClick={()=>navigate('/register')}>Register</Button>
            <Button ml='5px' mr='5px' colorScheme='purple' type="button" onClick={()=>navigate('/login')}>Login</Button>
            <Button colorScheme='purple' type="button" onClick={()=>navigate('/contacts')}>Contacts</Button>
            </Flex>
       </Box>
       
    </>
    ) 
}