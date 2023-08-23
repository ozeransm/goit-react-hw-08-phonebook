import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isActive } from "redux/selector";

export const PublickRoute=({component: Component, redirectTo})=>{
    const logined = useSelector(isActive);
    return logined ? <Navigate to={redirectTo}/> : Component;
    
}