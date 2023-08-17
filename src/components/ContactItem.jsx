import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteFromPhoneBook } from "../redux/operations";

export const ContactItem = ({id, name, number})=>{
    const dispatch = useDispatch();
    
    return(
        <li>{name}: {number} <button onClick={()=>dispatch(deleteFromPhoneBook(id))}>Delete</button></li>
    )
}
ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
    
  }