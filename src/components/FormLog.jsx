import { FormControl, Input, Button, Text, InputGroup, InputRightElement } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from 'redux/operations';
import { isActive, user } from 'redux/selector';


export const FormLog=({num=100})=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [show, setShow] = useState(false);
    const logined = useSelector(isActive);
    const logUser = useSelector(user);
    const handleClick = () => setShow(!show);
    const dispatch = useDispatch();
      function handlerLogin(e){
        e.preventDefault();
        !logined && dispatch(login({email, password}));
        logined && dispatch(logout(axios.defaults.headers.common.Authorization));
      }
    return(
        
        <form onSubmit={handlerLogin}>
        <FormControl display='flex' >
          {!logined ? <Input 
                          id={`field-r3${num}`}
                          name="email" 
                          value={email} 
                          type='email' 
                          color='grey' 
                          placeholder='Email' 
                          w='100' 
                          mr='3' 
                          onChange={({target:{value}})=>setEmail(value)}/> 
                          : <Text fontSize='24px' fontWeight='500'>User: {logUser?.name}</Text>}
          {!logined && <InputGroup size='md'>
            <Input
            id={`field-r4${num}`}
            name="password"
            value={password}
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            onChange={({target:{value}})=>setPassword(value)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>}
          <Button ml='3' mr='3' colorScheme='teal' type="submit">{logined ? 'Logout' : 'Login' }</Button>
            
        </FormControl>
        </form>
    )
}