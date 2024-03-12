import React from "react";
import axios from "axios";
const UserContext = React.createContext()
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserContextProvider(props) {


    const initState = {
        user : JSON.parse(localStorage.getItem("user")) || "",
        token : localStorage.getItem("token") || "",
        cats : [],
        errMsg : ""
        // test : "stringTest"
        // user : "",
        // token : "",
        // cats : [],
        // errMsg : ""
    }
    const [userState, setUserState] = React.useState(initState)
    const [allCats, setAllCats] = React.useState([])
    const [edit, setEdit] = React.useState({
        title : "",
        description : "",
        imgUrl: ""
    })

    const [addCatMessage, setAddCatMessage] = React.useState("")
    const [editCatMessage, setEditCatMessage] = React.useState("")


    function getUserCats() {
        // console.log("getUserCats is firing sarge")
        userAxios.get("/api/cat/user")
        .then(res => {
            // console.log(res.data)
            // console.log("^^^^res.data from getUserCats")
            setUserState(prev => {
                console.log('cats:', res.data)
                return {
                ...prev,
                cats : res.data
        }})
            // console.log(cats)
            // console.log("cats")
        })
        // console.log(userState)
        // console.log("^^^^userState")
        //^^^^^userState is undefined
        .catch(err => console.log(err))

    }



    function getAllCats() {
        userAxios.get("/api/cat")
        .then(res => {
            // console.log(res.data)
            // console.log("^^^^^^^^res.data")
            setAllCats(res.data)
        })
        .catch(err => console.log(err))
    }



    function addCat(newCat) {
        userAxios.post("/api/cat", newCat)
        .then(res => {
            setUserState(prev => ({
                ...prev,
                cats : [...prev.cats, res.data]
            }))
            setAddCatMessage("successfully added a lovely little cat!")

        })
        .catch(err => {
            console.log(err)
            setAddCatMessage("sorry, something went wrong")        })
    }





    function signup(credentials) {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prev => ({ //need this
                ...prev,
                user, token
            }))
            // console.log(res)
            // console.log("^^^^res from signup")
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
        // .catch(err => handleAuthErr(err.response.data.errMsg)) //doesnt exist
    }
    
    
    



    function login(credentials) {
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserCats() 
            setUserState(prev => {
               return {...prev,
                user : user,
                token : token}
            })
            // console.log(res)
            // console.log("^^^^^res from login")
    
    
        })
        .catch(err => console.log(err))
        // .catch((err) => handleAuthErr(err.response.data.errMsg))
    }
    function handleAuthErr(errMsg) {
        setUserState(prev => ({
            ...prev,
            errMsg
        }))


    function resetAuthErr() {
        setUserState(prev => ({
            ...prev,
            errMsg : ""
        }))
    }
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user : {},
            token : "",
            cats: []
        })
    }
    


    function editCat(_id, edit) {
        const api = `/api/cat/${_id}`
        //  /api/api/cat
        //messing around with this
        userAxios.put(api, edit)
        .then((res) => {
            // setEdit({
            //     title : "",
            //     description : "",
            //     imgUrl : ""
            // })
            console.log("res.data", res.data)

            setEdit(prev => ({
                ...prev,
                // [name] : value
                title : res.data.title,
                description : res.data.description,
                imgUrl : res.data.imgUrl
            }
            )
            )


            // console.log(edit)
            // console.log("^^^^^edit from editCat in context")
            getUserCats()
            getAllCats()


        })
        .catch(err => {
            console.log(err)
            setEditCatMessage("sorry, something went wrong 😿")
            })
    }


    function deleteButton(_id) {
        // console.log(_id)
        // console.log("^^^^^_id from deleteButton and ")
        userAxios.delete(`/api/cat/${_id}`)
        .then(res => {
            console.log(`successfully deleted ${res.title} `)
            getUserCats()
            getAllCats()
        })
        .catch(err => console.log(err))
    }





// console.log(userState)


// {user, addCat, cats, getUserCats}

    return (
        <UserContext.Provider
        value = {{
            ...userState,
            signup,
            login,
            handleAuthErr,
            // resetAuthErr,
            logout,
            getAllCats,
            addCat,
            getUserCats,
            allCats,
            setAllCats,
            edit,
            setEdit,
            editCat,
            deleteButton,
            addCatMessage,
            setAddCatMessage,
            editCatMessage,
            setEditCatMessage

            

        }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }