import React from "react";
import { Navigate, Link } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return (
            <div className="pRoute">
                <h2>Please log in to view this page</h2>
                <p><Link to="/login">Go to Login</Link></p>
            </div>
        );
    }
    return children;
};

export default ProtectedRoute;
