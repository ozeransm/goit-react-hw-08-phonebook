import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isActive, isRefresh } from "redux/selector";

export const PrivateRoute=({ component: Component, redirectTo = '/' })=>{
    const logined = useSelector(isActive);
    const refresh = useSelector(isRefresh)
    return (!logined && !refresh) ? <Navigate to={redirectTo}/> : Component;
}

