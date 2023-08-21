import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/operations";
import { Button, FormControl, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

export const FormReg=()=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const dispatch=useDispatch();
    function handlerRegister(e){
        e.preventDefault();
        
        dispatch(register({name, email, password}))
        e.target.reset();
    }
    
    return(
        
        <form onSubmit={handlerRegister}>
        <FormControl display='flex' flexDirection='column'>
            <>
            
            <Input type='text' name="name" value={name} color='grey' placeholder='Full Name' w='150' mb='5px' onChange={({target:{value}})=>setName(value)}/>  
            <Input type='email' name="email" value={email} color='grey' placeholder='Email' w='150' mb='5px' onChange={({target:{value}})=>setEmail(value)}/>
        <InputGroup size='md'>
        <Input
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