import { useDispatch } from "react-redux";
import { filter } from "../redux/reducer";

export const FindContact = ()=>{
    const dispatch = useDispatch();

    const handlerChange = (e)=>{
        dispatch(filter({filter: e.target.value}))
    }
    const handlerBlur = (e)=>{
        e.target.value='';
        dispatch(filter({filter: ''}));
    }
    return(
        <input type="text" onChange={handlerChange} onBlur={handlerBlur}/>
    )
}