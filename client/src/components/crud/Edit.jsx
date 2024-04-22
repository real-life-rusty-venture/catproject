import React from "react";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";

export default function Edit(props) {
    
    const {editCat, editCatMessage, setEditCatMessage, userState  } = React.useContext(UserContext)
    const [editFlipper, setEditFlipper] = React.useState(false)
    const initEdit = {
        title : props.title || "",
        description : props.description || "",
        imgUrl : props.imgUrl || ""
    }

    const [edit, setEdit] = React.useState(initEdit)
    console.log("userState", userState)
    // setEdit({title : props.cat.title || "",
    // description : props.cat.description || "",
    // imgUrl : props.cat.imgUrl || ""})
    console.log("props", props)

    function handleChange(e) {
        console.log('name:', e.target.name, 'value:', e.target.value)
        const {name, value} = e.target
        setEdit(prev => ({
            ...prev,
            [name] : value
        }
        )
        )
        console.log("edit", edit)
        // console.log(edit)
        // console.log("^^^^edit")
    }




    function formHandleClick() {
        console.log('edit:',edit)
        editCat(props._id, edit)
        setEdit(initEdit)
        // setEditFlipper(prev => !prev)
    }



    function flipperHandleClick() {
        setEditFlipper(prev => !prev)
    }


    const divStyle = {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center",
        textAlign : "center"
    }


const editStyle = {
    // backgroundColor : "#E5E4E2",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
    textAlign : "center"
}


const inputStyle = {
    textAlign : "center"
}

const [editStyleState, setEditStyleState] = React.useState(editStyle)


    // const mediaQuery = window.matchMedia('(max-width: 600px)')


    


    const mediaQuery = window.matchMedia('(max-width: 600px)')


    


      function queryMatcher() {
        if (mediaQuery.matches) {
            // const smallDivStyle = {
            //     "backgroundColor" : "black",
            //     "color" : "white",
            //     "textAlign" : "center",
            //     "fontSize" : "20px",
            //     "paddingTop" : "4px",
            //     "paddingBottom" : "5px"
            // }

            


            const smallFormStyle = {
                textAlign : "center",
                // display : "flex"
                display : "grid",
                gridTemplateColumns : "1fr 2fr 1fr",
                paddingTop : "55px"
            }
            const smallInputStyle = {
                display : "block",
                // marginLeft : "400px",
                width : "350px",
                height : "50px",
                // alignItems : "center"
                gridColumn : "2/3"
                
            }
            const smallButtonStyle = {
                display : "block",
                // marginLeft : "400px",
                width : "357px",
                height : "50px",
                backgroundColor : "#1B1212",
                color : "#E5E4E2",
                gridColumn : "2/3"
            }

            // setFormStyleState(smallFormStyle)
            // setInputStyleState(smallInputStyle)
            // setButtonStyleState(smallButtonStyle)
        }
      }
      React.useEffect(queryMatcher, [])
      console.log("edit.title", edit.title)
    return (
        <div style = {divStyle} >
            <button onClick={flipperHandleClick}>edit this cat dont turn back</button>
            { editFlipper &&
            <form >
                <input style = {editStyleState} placeholder = "title" name = "title" onChange={handleChange} value = {edit.title} autoComplete="off"/>
                <input style = {editStyleState} placeholder = "description" name = "description" onChange={handleChange} value = {edit.description} autoComplete="off"/>
                <input style = {editStyleState} placeholder = "imgUrl" name = "imgUrl" onChange={handleChange} value = {edit.imgUrl} autoComplete="off"/>
                <button type = "button" onClick={formHandleClick}>fix this cat!</button>
                <p>{editCatMessage}</p>
            </form>
}
        </div>
    )

}