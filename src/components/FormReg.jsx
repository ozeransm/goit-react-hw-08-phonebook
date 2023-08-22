import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth";
import { Button, FormControl, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export const FormReg=({num=100})=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const dispatch=useDispatch();
    const navigate = useNavigate();
    function handlerRegister(e){
        e.preventDefault();
        dispatch(register({name, email, password})).then(()=>navigate('/contacts'));
        e.target.reset();
    }
    
    return(
        
        <form onSubmit={handlerRegister}>
        <FormControl display='flex' flexDirection='column'>
            <>
            
            <Input 
              id={`field-r5${num}`}
              type='text' 
              name="name" 
              value={name} 
              color='grey' 
              placeholder='Full Name' 
              w='150' 
              mb='5px' 
              onChange={({target:{value}})=>setName(value)}/>  
            <Input 
              id={`field-r6${num}`}
              type='email' 
              name="email" 
              value={email} 
              color='grey' 
              placeholder='Email' 
              w='150' 
              mb='5px' 
              onChange={({target:{value}})=>setEmail(value)}/>
        <InputGroup size='md'>
        <Input
          id={`field-r7${num}`}
          name="password"
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          value={password}
          onChange={({target:{value}})=>setPassword(value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
        </InputGroup>
            
        <Button type='submit'>Add User</Button>
            </>
            
        </FormControl>
        </form>
    )
}