import express from "express";
import {heroType, responseType} from "../types"
import Hero from "../models/hero"
import { is_object_empty } from "../functions";

const hero = express()

let response:responseType ={
    status: false,
    message: "Somthing went wrong"
}

//HERO *C U R D
hero.post('/create', async (req, res) => {

    let data:heroType = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    if (is_object_empty(data)) {
        response.message = "Please fill all required fields"
    }else{

        try {

            let user_exist = await Hero.find({
                email: req.body.email
            }).countDocuments()

            if (user_exist > 0) {
                throw "This hero already exists!"
            }
            
    
            await Hero.create(data)
            .then(()=>{
                response.status = true
                response.message = "Hero created successfully"
            })
            .catch(()=>{
                response.status = false
                response.message = "Somthing went wrong"
            })
        } catch (error) {
           
            response.status = false
            if (typeof error == 'string') {
                response.message = error
            }
            else {
                response.message = "Somthing went wrong while creating the user"
            }
        }
    }
  res.json(response)
})

//HERO C *U R D
hero.post('/update', async (req, res) => {
    let id = req.body.id

    let data:heroType = {}

    req.body.name? data.name =  req.body.name: null
    req.body.email? data.email = req.body.email: null
    req.body.password? data.password = req.body.password : null
    req.body.accessLevel?  data.accessLevel= req.body.accessLevel : null
    req.body.active?  data.active= req.body.active : null
    
    if (is_object_empty(data)) {
        response.message = "Please fill all required fields"
    }else{

        try {

            if (data.email) {
               
                await Hero.find({email: data.email})
                .then((info:any)=>{
            
                    
                    if (info[0]._id != 'undefined') {
                        if (info[0]._id != req.body.id) {
                            throw "Can't use this email because it is already in use!"
                        }
                    }
                }).catch(err => console.log(err)
                )
            }

            if ((Object.keys(data)).length< 1) {
                throw "Please send some data to update";
            }

      
            

            await Hero.findByIdAndUpdate(id,{
                email: data.email
            })
            .then(()=>{
                response.status = true
                response.message = "Hero updated successfully"
            })
            .catch(()=>{
                throw new Error
            })

        } catch (error) {
           
            response.status = false
            if (typeof error == 'string') {
                response.message = error
            }
            else {
                response.message = "Somthing went wrong while updating the user"
            }
        }
    }

    res.json(response)
})

//HERO C U *R D
hero.post('/read', (req, res) => {
    res.json(response)

})

//HERO C U R *D
hero.post('/delete', (req, res) => {
    res.json(response)

})

//HERO list one

export default hero




  