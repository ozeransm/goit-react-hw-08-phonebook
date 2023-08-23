import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isActive, isRefresh } from "redux/selector";

export const PrivateRoute=({ component: Component, redirectTo = '/' })=>{
    const logined = useSelector(isActive);
    const refresh = useSelector(isRefresh);
    const shouldRedirect = !logined && !refresh;
    return shouldRedirect ? <Navigate to={redirectTo}/> : Component;
}
