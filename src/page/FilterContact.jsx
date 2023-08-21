import { Box, Input, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/reducer';

export const FilterContact = ()=>{
  const dispatch = useDispatch();

  const handlerChange = (e)=>{
      dispatch(filter({filter: e.target.value}))
  }
  
  const handlerBlur = (e)=>{
      e.target.value='';
      dispatch(filter({filter: ''}));
  }   
      
    return(
        <Box w='90%' ml='auto' mr='auto' mb='0' display='flex' alignItems="center" justifyContent="center" bg='lightBlue' borderRadius='md' p={4} color='white'>
        
        <Text fontSize='20px' fontWeight='500'>Filter contact by name</Text>
        
        <Input type='text' color='grey' placeholder='Name' w='100' ml='3' mr='3' onChange={handlerChange} onBlur={handlerBlur}/>
        
        </Box>
    )
}