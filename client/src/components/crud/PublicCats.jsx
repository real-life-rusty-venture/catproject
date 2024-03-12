import React from "react";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";
import CatCard from "../pages/CatCard";
export default function PublicCats(props) {
    const { allCats } = React.useContext(UserContext)


        // console

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
            {allCats.map(item => {
                return (
                    <>
                        <CatCard {...item}/>
                    </>
                )
            })}
        </div>
    )
}