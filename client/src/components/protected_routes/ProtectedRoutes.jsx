import React from "react";
import { Navigate } from "react-router-dom"
export default function ProtectedRoutes(props) {
    const { token, children } = props
    return token ? children : <Navigate to = "/"/>
}