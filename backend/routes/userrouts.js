import express from "express";
import { create, deleteUser, getAll, getOne, update, login } from "../controller/usercontroller.js";
import { verifyToken, isAdmin } from '../middleware/middleware.js';

// create api
const route = express.Router();


route.post("/create", create);
route.get('/getall', [verifyToken], getAll);
route.get("/getone/:id", [verifyToken],getOne);
route.put("/update", [verifyToken, isAdmin],update);
route.delete("/delete/:id",[verifyToken, isAdmin], deleteUser)

// login api 
route.post("/login", login);

export default route;