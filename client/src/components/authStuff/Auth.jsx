import React from "react";
import AuthForm from "./AuthForm";
import { UserContext, UserContextProvider } from "../context/UserContextProvider";
export default function Auth() {
    const formData = {username : "", password : ""}
    const [inputs, setInputs] = React.useState(formData)
    const [flipper, setFlipper] = React.useState(false)
    // const { signup, login, errMsg, resetAuthErr} = React.useContext(UserContext)
    const { signup, login, errMsg } = React.useContext(UserContext)
    function handleChange(e) {
        const { name, value} = e.target
        setInputs(prev => ({
            ...prev,
            [name] : value
        }))
        // console.log(inputs)
        // console.log("^^^^^inputs from handleChange")
    }
    function handleSignup(e) {
        // console.log("handleSignup firing man")
        e.preventDefault()
        signup(inputs)
        // console.log(inputs)
        // console.log("^^^handleSignup inputs")
    }
    function handleLogin(e) {
        // console.log("handleLogin firing capn")
        e.preventDefault()
        login(inputs)
        // console.log(inputs)
        // console.log("^^^^login inputs")
    }
    function toggleForm() {
        setFlipper(prev => !prev)
    }




    const authStyle = {
        border : "2px solid #36454f",
        padding : "20px",
        backgroundColor : "#E5E4E2",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : 'center',
        position : "static"
    }


    const [authStyleState, setAuthStyleState] = React.useState(authStyle)

    const mediaQuery = window.matchMedia('(max-width: 600px)')


    


    function queryMatcher() {
      if (mediaQuery.matches) {
         
          const smallAuthStyle = {
            textAlign : "center",
            backgroundColor : "#E5E4E2"



          }

          setAuthStyleState(smallAuthStyle)
      }
    }
    React.useEffect(queryMatcher, [])








return (
    <div style = {authStyleState}>
        <h1>cats website</h1>
        { flipper ? 
        <div>
            <AuthForm
            handleClick = {handleLogin}
            buttonText = "login"
            offer = "new  here?"
            inputs = {inputs}
            handleChange = {handleChange}
            setFlipper = {setFlipper}
            errMsg = {errMsg}
            />
        </div>
        :
        <div>
            <AuthForm
            handleClick = {handleSignup}
            buttonText = "sign up"
            offer = "come here often?"
            inputs = {inputs}
            handleChange = {handleChange}
            setFlipper = {setFlipper}
            errMsg = {errMsg}
            />

        </div>
            }
    </div>
)}