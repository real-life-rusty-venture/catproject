import React from "react";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";
import CatCard from "../pages/CatCard";
import Edit from "./Edit";
import DeleteCat from "./DeleteCat";
export default function UserCats(props) {
    // console.log("UserCats is firing i guess")
    const {UserCats, getUserCats, cats} = React.useContext(UserContext)
    React.useEffect(() => {
        getUserCats()
    }, [])
    console.log("i was born dry. no goop!", cats )
    //okay so it seeems that the array of cats is empty
    //when the site is being rendered  
    //but shortly afterwards fully loads with the cats
    //not sure if this is the problem 

    const catMap = cats ?  console.log("you got nothing man (userCats line 14)") : cats?.map(item => {
        return (
            <div>
                {/* <h1>give me convenience or give me death!</h1>
                <CatCard {...item} />
                <Edit {...item} />
                <DeleteCat {...item}/> */}
                <h1>ok</h1>
            </div>
        )
    })
    // cats.map(item => (
        
    // ))
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

    const catCards = cats.map(cat => (
        <div>
            <CatCard
                key={cat.id}
                title={cat.title}
                description={cat.description}
                imgUrl={cat.imgUrl}
            />
            <Edit _id = {cat._id} title = {cat.title} description = {cat.description} imgUrl = {cat.imgUrl}/>
            <DeleteCat _id = {cat._id}/>
        </div>

    ))


    return (
        <div  style = {divStyleState}>
            {/* {cats.map(cat => {<CatCard title = {cat.title} description = {cat.description} imgUrl = {cat.imgUrl}/>})} */}
            {/* <CatCard title = "wig" description = "wig" imgUrl = "GyG"/> */}
            {catCards}
        </div>
    )
}