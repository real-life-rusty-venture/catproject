const express = require("express")
const catRouter = express.Router()
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const Cat = require("../models/catModel")







catRouter.get("/", (req, res, next) => {
    Cat.find((err, cats) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cats)

    })
})




catRouter.get("/user", (req, res, next) => {
    Cat.find({user: req.auth._id}, (err, cats) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(cats)
    })
})



catRouter.get("/:id", (req, res, next) => {
    Cat.findOne({_id : req.params.id} ,(err, cats) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cats)
    })
})













catRouter.post("/", (req, res, next) => {
    console.log("post is clear sarge")
    console.log(req.user)
    req.body.user = req.auth._id
    const newCat = new Cat(req.body)
    newCat.save((err, savedCat) => {
        console.log("this cats getting saved!")
        if (err) {
            console.log("err detected capn")
            res.status(500)
            return next(err)
        }
        console.log("return that res baby!")
        return res.status(201).send(savedCat)
    })
})





catRouter.put("/:id", (req, res, next) => {
    Cat.findOneAndUpdate({_id : req.params.id}, req.body, {new : true}, (err, updatedCat) => {
        if (err) {
            res.status(500)
            return next(err)
        }return res.status(200).send(updatedCat)
    })
})




// catRouter.delete("/:id", (req, res, next) => {
//     Cat.findOneAndDelete({id : req.params._id, user : req.auth._id}, (err, deletedCat) => {

catRouter.delete("/:catId", (req, res, next) => {
    Cat.findOneAndDelete({_id : req.params.catId, user : req.auth._id}, (err, deletedCat) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`i killed your cat man. yeah, ${deletedCat}`)
    })
})















module.exports = catRouter