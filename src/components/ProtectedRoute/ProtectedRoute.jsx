import React from 'react'
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({ children, redirectPath = "/" }) {
    const logged = localStorage.getItem("isLogged") === "true";
    if (!logged) {
      return <Navigate to={"/"} replace />;
    }
    return children;
  }