import React from "react";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";
import CatCard from "../pages/CatCard";
import Edit from "./Edit";
import DeleteCat from "./DeleteCat";
export default function UserCats(props) {
    console.log("UserCats is firing i guess")
    const {UserCats, getUserCats} = React.useContext(UserContext)
    const {cat} = props
    React.useEffect(() => {
        getUserCats()
    }, [])
    const catMap = cat?.map(item => {
        // console.log("catMap theyre a firin mah lazer")
        // console.log(item) 
        // console.log("^^^^^^^^item from UserCats")
        // console.log(item._id)
        // console.log("^^^^item._id from catMap")



        
        
        
        return (
            <div>
                <CatCard {...item} />
                <Edit {...item} />
                <DeleteCat {...item}/>
            </div>
        )
    })
    // const divStyle = {
    //     display : "flex",
    //     // gridTemplateColumns : "1fr 1fr 1fr 1fr",
    //     backgroundColor : "#E5E4E2",
    //     flexWrap : "wrap",
    //     alignItems : "center",
    //     justifyContent : "space-evenly"

    // }

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


    const [divStyleState, setDivStyleState] = React.useState(divStyle)


    const mediaQuery = window.matchMedia('(max-width: 600px)')


    


    function queryMatcher() {
      if (mediaQuery.matches) {
          const smallDivStyle = {
              "textAlign" : "center",
              "fontSize" : "20px",
              "paddingTop" : "4px",
              "paddingBottom" : "5px",
              margin : "20px"
          }
          setDivStyleState(smallDivStyle)
      }
    }
    React.useEffect(queryMatcher, [])




    return (
        <div  style = {divStyleState}>
            {catMap}
        </div>
    )
}