import { Box } from "@chakra-ui/react"
import { FormReg } from "components/FormReg"


export const Register=()=>{
    

    return(
        <Box w='500px' ml='auto' mr='auto' mt='10px' mb='10px'  bg='white' borderRadius='md' p={4} color='darkgrey'>
        <FormReg/>
        </Box>
    )
}