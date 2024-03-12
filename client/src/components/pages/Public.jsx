import React from "react";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";
// import CatForm from "./CatForm";
import PublicCats from "../crud/PublicCats";
export default function Public() {
    const { user, addCat, cats, getAllCats, allCats } = React.useContext(UserContext)
    React.useEffect(() => { getAllCats() }, [])


    // const divStyle = {
    //     backgroundColor : "#E5E4E2",
    //     flexWrap : "wrap"
    // }
    const divStyle = {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#E5E4E2"
    }

    return (
        <div style = {divStyle}>
            <h1>public posts</h1>
            <PublicCats cat = {cats}/>
        </div>
)
}