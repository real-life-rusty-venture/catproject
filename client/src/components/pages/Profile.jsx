import React from "react"
import { UserContext, UserContextProvider } from "../context/UserContextProvider"
// import CatCard from "./CatCard"
// import AddCat from "./AddCat"
import CatCard from "./CatCard"
import UserCats from "../crud/UserCats"
import NewCat from "./NewCat"



export default function Profile() {
    const {user, addCat, cats, getUserCats} = React.useContext(UserContext)
    // console.log(cats)
    // console.log("^^^^^cats")
    React.useEffect(() => {
        getUserCats()
    }, [])



    // const divStyle = {
    //     display : "grid",
    //     gridTemplateColumns : "1fr 1fr 1fr 1fr",
    //     backgroundColor : "#E5E4E2"
    // }

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
            <h1>hey {user.username}</h1>
            {/* <NewCatForm addCat = {addCat}/> */}
            {/* <h3>your own personal cats, madame</h3> */}
            {/* <NewCat addCat = {addCat}/> */}
            <UserCats cat = {cats}/>

        </div>
    )

}