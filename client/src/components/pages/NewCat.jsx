import React from "react";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";
export default function NewCat(props) {

    const { addCat, addCatMessage, setAddCatMessage } = React.useContext(UserContext)

    const initInputs = {
        title : "",
        description : "",
        imgUrl : ""
    }
    const [inputs, setInputs] = React.useState(initInputs)

    const [successMessage, setSuccessMessage] = React.useState("")





    function handleChange(e) {
        e.preventDefault()
        setInputs(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))

    }



    function handleClick(e) {
        e.preventDefault()
        addCat(inputs) 
        //right here capn
        setInputs(initInputs)
    }





    const formStyle = {
        display : "block",
        paddingLeft : "475px",
        backgroundColor : "#E5E4E2",
        color : "#213547"
    }


    const inputStyle = {
        display : "block",
        height : "45px",
        width : "200px",
        textAlign : "center"
    }


    const buttonStyle = {
        marginRight : "425px",
        width : "200px"
    }


    const messageStyle = {
        color : "red",
        textAlign : "center"
    }

    // const divStyle = {
    //     backgroundColor : "#E5E4E2",
    //     display : "flex",
    //     flexDirection : "column",
    //     alignItems : "center",
    //     justifyContent : "center",
    //     textAlign : "center"
    // }

    const divStyle = {
        // display : "grid",
        // gridTemplateColumns : "1fr 1fr 1fr 1fr",
        backgroundColor : "#E5E4E2",
        display : "flex",
        flexDirection: 'column',
        backgroundColor : "#E5E4E2",
        flexWrap : "wrap",
        alignItems : "center",
        justifyContent : "space-evenly"
    }


    return (
        <form style = {divStyle}>
            <input style = {inputStyle} placeholder="title" name = "title" onChange={handleChange} value = {inputs.title} autoComplete="off"/>
            <input style = {inputStyle} placeholder="description" name = "description" onChange={handleChange} value = {inputs.description} autoComplete="off"/>
            <input style = {inputStyle} placeholder="imgUrl" name = "imgUrl" onChange={handleChange} value = {inputs.imgUrl} autoComplete="off"/>
            <button style = {inputStyle} onClick={handleClick}>add a lovely little cat</button>
            <p style = {messageStyle} >{addCatMessage}</p>
        </form>
    )


}