const express = require("express")
const authRouter = express.Router()
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")



// authRouter.post("/signup", (req, res, next) => {
//     // console.log("well its doing someting")
//     // res.send("happy birthday!")
//     User.findOne({username : req.body.username}, (err, user) => {
//         console.log("how ba a a ad can i be")
//         if (err) {
//             res.status(500)
//             return next(err)
//             console.log("u got an error")
//         }
//         if (user) {
//             res.status(403)
//             return next(new Error("that username is already taken"))
//             console.log("already taken")
//         }
//         // console.log("looks fine to me!")
//         else if (!user) {
//             const newUser = new User(req.body) //here
//             console.log("line 26!")
//             newUser.save((err, savedUser) => { //here
//                 console.log("line 28 works")
//                 if (err) {
//                     console.log(err)
//                     // res.status(500)
//                     // return next(err)
//                     console.log("another error")
//                 }
//                 console.log("success!")
//                 // const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
//                 // return res.status(201).send({token, user: savedUser.withoutPassword()})
//                 return res.send("hi")
//                 console.log("what")
//                 return res.send("how")
//             })
            
//         }
//      })

// }) //here




authRouter.post("/signup", async(req, res) => {
    try {
        const foundUser = await User.findOne({username : req.body.username})
        if (foundUser) {
            const err = "username already exists"
            console.log("something")
            throw err
        }
        else if (!foundUser) {
            const newUser = new User(req.body)
            await newUser.save()
            console.log("test")
            const token = jwt.sign(newUser.withoutPassword(), process.env.SECRET)
            res.status(201).send({user : newUser.withoutPassword(), token})
        }
    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message : err})
    }
})




authRouter.post("/login", (req, res, next) => {
    User.findOne({username : req.body.username}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!user) {
            res.status(403)
            return next(new Error("that username or password is taken"))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err || !isMatch) {
                res.status(403)
                return next(new Error("username or password is wrong"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET )
            return res.status(201).send({token, user : user.withoutPassword()})
        })
    })
}
)






module.exports = authRouter