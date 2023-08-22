import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

   
    

const HomePage = ()=>{
    
    return(
    <>
       <Box display='flex' flexDirection='column' alignItems='center' w='70%' ml='auto' mr='auto' mt='10px' mb='20px' bg='lightBlue' borderRadius='md' p={4} color='white'>
            <Text fontSize='24px' fontWeight='700' >Home Page</Text>
            <Text fontSize='20px' fontWeight='500' >Please <Link to='/register' > register </Link> to platform or <Link to='/login'>enter login and password</Link></Text>
            
       </Box>
       
    </>
    ) 
}
export default HomePage;