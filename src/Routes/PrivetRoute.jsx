import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import {  Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, loadding} = useContext(AuthContext)
    if(loadding){
        return <span className="loading loading-spinner text-warning"></span>
    }

    if(user){
        return children
    }
    

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivetRoute;