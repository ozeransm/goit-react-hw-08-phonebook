import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isActive } from "redux/selector";

export const PrivateRoute=({ component: Component, redirectTo = '/' })=>{
    const logined = useSelector(isActive);
    if(logined) return Component;
    return <Navigate to={redirectTo}/>
}

