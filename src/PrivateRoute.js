import { Navigate } from "react-router-dom";
import React, { useState } from "react";

const PrivateRoute = ({ Component }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);


    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;