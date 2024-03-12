import React from "react";
import { UserContext } from "../context/UserContextProvider";
export default function DeleteCat(props) {
    const { deleteButton } = React.useContext(UserContext)
    // console.log(props._id)
    // console.log("^^^props._id in DeleteCat")


    
    const divStyle = {
        // display : "grid",
        // gridTemplateColumns : "1fr 1fr 1fr 1fr",
        backgroundColor : "#E5E4E2",
        display : "flex",
        backgroundColor : "#E5E4E2",
        flexWrap : "wrap",
        alignItems : "center",
        justifyContent : "space-evenly"
    }

    return (
        <div style = {divStyle}>
            <button onClick={() => deleteButton(props._id)}>throw me into the void!</button>
        </div>
    )
}