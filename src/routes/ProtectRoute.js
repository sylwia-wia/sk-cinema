import {Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectRoute = ({children, ...rest}) => {

    const isAuthenticated  = localStorage.getItem('token');

    // const isAuthenticated = useSelector(store => store.authorisation.authenticated)
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login'/>
    )
};

export default ProtectRoute;