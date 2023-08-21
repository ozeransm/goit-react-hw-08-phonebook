import { useEffect } from "react";
import { Contacts } from "../page/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoneBook, refresh } from "../redux/operations";
import { isLoading } from "../redux/selector";
import ScaleLoader from "react-spinners/ScaleLoader";
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { Navbar } from "../page/Navbar";
import { AddNewContact } from "./AddNewContact";
import { FilterContact } from "../page/FilterContact";
import { RegModal } from "./RegModal";
import { HomePage } from "../page/HomePage";
import {  Route, Routes } from "react-router-dom";
import { Register } from "../page/Register";
import { Login } from "../page/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublickRoute } from "./PublickRoute";

const override = {
  display: "block",
  position: "fixed",
  marginLeft: "50vw",
  marginTop: "0vh",
  
};


export const App = () => {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(refresh())

    dispatch(fetchPhoneBook());
  },[dispatch])

  const { isOpen, onOpen, onClose } = useDisclosure();
   
  return (
    <ChakraProvider>
    <>
      
      <Routes>
        <Route path="/" element={<Navbar onOpen={onOpen} />}> 
          <Route index element={<HomePage/>} /> 
          <Route path="register" element={
            <PublickRoute component={<Register/>}/>} />
          <Route path="login" element={<Login/>} />
          <Route path="contacts" element={
            <PrivateRoute redirectTo="/login" component={
              <>
            <AddNewContact/>
            <FilterContact/>
            <ScaleLoader
              color="#d3841d"
              speedMultiplier={4}
              loading={loading}
              cssOverride={override}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <Contacts/>
          </>
            } />
            } />
        </Route>   
        
          

      </Routes>
      
      <RegModal onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
      </>
    </ChakraProvider> 
    
     
  );
};
// logined && <>
//             <AddNewContact/>
//             <FilterContact/>
//             <ScaleLoader
//               color="#d3841d"
//               speedMultiplier={4}
//               loading={loading}
//               cssOverride={override}
//               size={80}
//               aria-label="Loading Spinner"
//               data-testid="loader"
//             />
//             <Contacts/>
//           </>