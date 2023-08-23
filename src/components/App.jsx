import {  useDispatch, useSelector } from "react-redux";
import { isLoading } from "../redux/selector";
import ScaleLoader from "react-spinners/ScaleLoader";
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { Navbar } from "../page/Navbar";
import { RegModal } from "./RegModal";
import {  Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublickRoute } from "./PublickRoute";
import { lazy, useEffect } from "react";
import { refresh } from "redux/contacts/contacts";

const HomePage = lazy(() => import("../page/HomePage"));
const NotFound = lazy(() => import("page/NotFound"));
const Register = lazy(() => import("../page/Register"));
const Login = lazy(() => import("../page/Login"));
const AddNewContact = lazy(() => import("../components/AddNewContact"));
const FilterContact = lazy(() => import("../page/FilterContact"));
const Contacts = lazy(() => import("../page/Contacts"));

const override = {
  display: "block",
  position: "fixed",
  marginLeft: "50vw",
  marginTop: "0vh",
  
};


export const App = () => {
  const loading = useSelector(isLoading);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const dispatch = useDispatch(refresh);
  useEffect(()=>{
    dispatch(refresh());
  },[dispatch]) 

  return (
    <ChakraProvider>
    <>
      <Routes>
        <Route path="/" element={<Navbar onOpen={onOpen} />}> 
          <Route index element={<HomePage/>} /> 
          <Route path="register" element={
              <PublickRoute redirectTo="/" component={<Register/>}/>}/>
          <Route path="login" element={
              <PublickRoute redirectTo="/" component={<Login/>}/>} />
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
            <Route path="*" element={<NotFound/>}/>
          
        </Route>   
      </Routes>
      <RegModal onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
      </>
    </ChakraProvider> 
    
     
  );
};
