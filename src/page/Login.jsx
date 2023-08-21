import { Box, Text } from "@chakra-ui/react"
import { FormLog } from "components/FormLog"

export const Login=()=>{
    return(
        <>
            <Box w='500px' ml='auto' mr='auto' mt='10px' mb='10px'  bg='lightBlue' borderRadius='md' p={4} color='darkgrey'>
                <Text fontSize='24px' fontWeight='700'>Please enter login and password</Text>
                <FormLog/>
            </Box>
        </>
    )
}