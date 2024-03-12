import React from "react";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";
// import { UserContext } from "./context/userContextProvider"

export default function AuthForm(props) {
    const { inputs : {username, password}, handleClick, buttonText, handleChange, setFlipper, offer} = props
    // const {resetAuthErr, errMsg} = React.useContext(UserContext)
    const {errMsg} = React.useContext(UserContext)
    function toggleForm() {
        setFlipper(prev => !prev)
        // resetAuthErr()
    }


    const inputStyle = {
        display : "block",
        height : "50px",
        width : "337px",
        textAlign : "center",
        justifyContent : "center",
        alignItems : "center",
        flexWrap : "wrap",
        position : "static",
        margin : "auto"
    }




    const buttonStyle = {
        textAlign : "center",
        justifyItems : "center",
        alignItems : "center"
    }
    


    return (
        <form style={buttonStyle}>
            <input style = {inputStyle} placeholder = "username" name = "username" defaultValue = {username} onChange = {handleChange} autoComplete="off"/>
            <input style = {inputStyle} placeholder = "password" name = "password" defaultValue = {password} onChange = {handleChange} autoComplete="off"/>
            <button style = {buttonStyle} onClick={handleClick} type = "button" >{buttonText}</button>
            <h4 style = {buttonStyle} onClick={toggleForm}>{offer}</h4>
            <p>{errMsg}</p>
        </form>
    )
}

//pages, components, context, styles, assets
//assets is anything thats not code like a picture