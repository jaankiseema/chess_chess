import express from "express";
import { create, deleteUser, getAll, getOne, update, login,createkYC,getAllKYC } from "../controller/usercontroller.js";
import { verifyToken, isAdmin } from '../middleware/middleware.js';

// create api
const route = express.Router();


route.post("/create", create);
route.get('/getall', [verifyToken], getAll);
route.get("/getone/:id", [verifyToken],getOne);
route.put("/update", [verifyToken],update);
// route.delete("/delete/:id",[verifyToken, isAdmin], deleteUser)
route.delete("/delete/:id",[verifyToken], deleteUser)

// login api 
route.post("/login", login);
route.post("/kyc",[verifyToken], createkYC);
route.get("/all-kyc",[verifyToken], getAllKYC);
export default route;