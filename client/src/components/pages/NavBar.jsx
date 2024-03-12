import React from "react";
import { Link } from "react-router-dom"
export default function NavBar(props) {


    const navStyle = {
        backgroundColor: "#213547",
        color : "#E5E4E2",
        height : "100px",
        paddingTop : "50px",
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "center"
    }

    const link1Style = {
        color : "#E5E4E2",
        // paddingLeft : "700px",
        // paddingRight : "10px",
        fontSize : "larger",
        paddingRight : "5px"
    }


    const linkStyle = {
        color : "#E5E4E2",
        // paddingRight : "10px",
        fontSize : "larger",
        paddingRight : "10px"

    }


    const buttonStyle = {
        backgroundColor: "#213547",
        color : "#E5E4E2",
    }




    const [navStyleState, setNavStyleState] = React.useState(navStyle)
    const [link1StyleState, setLink1StyleState] = React.useState(link1Style)
    const [linkStyleState, setLinkStyleState] = React.useState(linkStyle)
    const [buttonStyleState, setButtonStyleState] = React.useState(buttonStyle)





    // const mediaQuery = window.matchMedia('(max-width: 600px)')
    //   function queryMatcher() {
    //     if (mediaQuery.matches) {
    //         const smallNavStyle = {
    //             backgroundColor: "#213547",
    //             color : "#E5E4E2",
    //             "display" : "grid",
    //             "gridTemplateColumns" : "1fr 1fr 1fr 1fr"
    //         }
    //         // const smallLogoStyle = {
    //         //   "display" : "none"
    //         // }
    //         const smallLinkStyle = {
    //             "fontSize" : "20px",
    //             backgroundColor: "#213547",
    //             color : "#E5E4E2",
    //             "textAlign" : "center",
    //             "paddingTop" : "5px",
    //             "paddingBottom" : "15px",
    //             "paddingLeft" : "10px",
    //             paddingBottom : "10px"
    //         }
    //         const smallButtonStyle = {
    //             gridColumn : "4/5"
    //         }
    //         setNavStyleState(smallNavStyle)
    //         setLink1StyleState(smallLinkStyle)
    //         setLinkStyleState(smallLinkStyle)
    //         setButtonStyleState(smallButtonStyle)
    //     }
    //   }
    //   React.useEffect(queryMatcher, [])


    return (
        <nav style = {navStyle}>
            <Link style = {link1StyleState} to = "/Profile">profile</Link> 
            <Link  style = {linkStyleState} to = "/Public">public</Link>
            <Link style = {linkStyleState} to = "/NewCat">add a lovely little cat!</Link>
            <button onClick = {props.logout}>log out</button>
        </nav>
    ) 
}