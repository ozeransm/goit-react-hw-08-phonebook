import { useSelector } from "react-redux";
import { isActive } from "redux/selector";

export const PrivateRoute=({ component: Component, redirectTo = '/' })=>{
    const logined = useSelector(isActive);
    console.log(logined)
    if(logined) return Component;
    // return <Navigate to={redirectTo}/>
}

