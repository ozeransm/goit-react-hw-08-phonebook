import { useSelector } from "react-redux";
import { contacts, filterName } from "redux/selector";
import { ContactItem } from "./ContactItem";
import PropTypes from 'prop-types';
export const Contacts = ()=>{
    const phoneBook = useSelector(contacts);
    const filterPhone = useSelector(filterName);
    const filterPhoneBook = phoneBook.filter(({name})=>name?.toUpperCase().includes(filterPhone.toUpperCase()));
    // console.log(phoneBook)
    return(
    <ul>
            {
              filterPhoneBook.map((el)=><ContactItem key={el.id} id={el.id} name={el.name} number={el.number}/>)
            }
        </ul>
    )
}
Contacts.propTypes = {
  filterPhoneBook: PropTypes.arrayOf(
      PropTypes.shape({
          id:PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
      })
  ),
  filterPhone: PropTypes.string,
}