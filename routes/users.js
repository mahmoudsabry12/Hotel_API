import express, { Router } from "express";
import { createUser, updateUser, deleteUser, getUser, getUsers } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();



router.get("/checkauthentication" ,verifyToken, (req, res,next )=>{
    res.send("hello user , you are logged in")
})

router.get("/checkuser/:id" ,verifyUser , (req, res,next )=>{
    res.send("hello user , you are logged in and can delete your account")
})

router.get("/checkadmin/:id" , verifyAdmin, (req, res,next )=>{
    res.send("hello Admin , you are logged in and can delete all account")
})


//CREATE
router.post("/" , verifyUser,createUser)

//UPDATE
router.put("/:id" , verifyUser, updateUser)
 //DELETE
 router.delete("/:id" ,verifyUser, deleteUser )


//GET 
router.get("/:id" , verifyAdmin,getUser )

//GETALL

router.get("/" , getUsers )


export default router