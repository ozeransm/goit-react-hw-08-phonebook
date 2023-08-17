import { useEffect } from "react";
import css from "./App.module.css";
import { Contacts } from "./Contacts";
import { FindContact } from "./FindContact";
import { Form } from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoneBook } from "../redux/operations";
import { isLoading } from "../redux/selector";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
  display: "block",
  position: "fixed",
  marginLeft: "10vw",
  marginTop: "0vh",
  
};


export const App = () => {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  useEffect(()=>{
  
    dispatch(fetchPhoneBook());
  },[dispatch])
  return (
    
    <div className={css.common}>
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <FindContact />
      {/* {loading && <h2>Loading...</h2>} */}
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
    </div> 
     
  );
};
