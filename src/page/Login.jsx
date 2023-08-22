import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { FormLog } from "components/FormLog"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isActive } from "redux/selector";

const Login=()=>{
    const logined = useSelector(isActive);
    const navigate = useNavigate()
    return(
        <>
            <Box display='flex' flexDirection='column' alignItems='center' w='500px' ml='auto' mr='auto' mt='10px' mb='10px'  bg='lightBlue' borderRadius='md' p={4} color='darkgrey'>
                <Text fontSize='24px' fontWeight='700'>Please enter login and password</Text>
                <FormLog num={102}/>
                {logined && <Flex mt='10px'>
                                <Button colorScheme='purple' type="button" onClick={()=>navigate('/register')}>Register</Button>
                                <Button ml='5px' mr='5px' colorScheme='purple' type="button" onClick={()=>navigate('/login')}>Login</Button>
                                <Button colorScheme='purple' type="button" onClick={()=>navigate('/contacts')}>Contacts</Button>
                            </Flex>
                }
            </Box>
        </>
    )
}
export default Login;