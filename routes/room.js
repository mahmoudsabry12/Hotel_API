import express, { Router } from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();



//CREATE
router.post("/:hotelid" , verifyAdmin,createRoom)

//UPDATE
router.put("/:id" ,verifyAdmin, updateRoom)
router.put("/availablilty/:id" , updateRoomAvailability)
 //DELETE
 router.delete("/:id/:hotelid" ,verifyAdmin, deleteRoom )


//GET 
router.get("/:id" ,getRoom )

//GETALL

router.get("/" , getRooms )



export default router