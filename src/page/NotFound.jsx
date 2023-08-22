import { Box, Text } from "@chakra-ui/react"
const NotFound = ()=>{
    return(
        <Box w='90%' ml='auto' mr='auto' mt='20px' mb='10px' display='flex' alignItems="center" justifyContent="space-between" bg='lightBlue' borderRadius='md' p={4} color='white'>
            <Text fontSize='24px' fontWeight='700'>Page not found</Text>
        </Box>
    )
}
export default NotFound;