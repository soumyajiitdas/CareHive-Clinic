import React from "react";
import { Navigate, Link } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return (
            <div style={{ padding: "20px" }}>
                <h2>Please log in to view this page</h2>
                <Link to="/login">Go to Login</Link>
            </div>
        );
    }
    return children;
};

export default ProtectedRoute;
