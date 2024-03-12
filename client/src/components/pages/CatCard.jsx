import React from "react";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";
export default function CatCard(props) {
    // console.log("CatCard firing regrettably")

    const imgStyle = {
        width : "300px"
    }


    // const divStyle = {
    //     display : "flex",
    //     flexDirection : "column",
    //     alignItems : "center",
    //     justifyContent : "center"
    // }

    const divStyle = {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#E5E4E2",
        paddingLeft : "10px"
    }



    return (
            <div style = {divStyle} >
                <h3>{props.title}</h3>
                <img style = {imgStyle} src = {props.imgUrl}/>
                <p>{props.description}</p>
            </div>
    )
}