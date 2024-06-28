import express from "express";
import { create, deleteUser, getAll, getOne, update, login,createkYC,getAllKYC,
    addDeposite,allDeposites,approveDepositRequest,getUserDeposits,getSingleKYC } from "../controller/usercontroller.js";
import { verifyToken, isAdmin } from '../middleware/middleware.js';

// create api
const route = express.Router();


route.post("/create", create);
route.get('/getalluser', [verifyToken], getAll);
route.get("/getone/:id", [verifyToken],getOne);
route.put("/update", [verifyToken],update);
// route.delete("/delete/:id",[verifyToken, isAdmin], deleteUser)
route.delete("/delete/:id",[verifyToken], deleteUser)

// login api 
route.post("/login", login);
route.post("/kyc",[verifyToken], createkYC);
route.get("/all-kyc",[verifyToken], getAllKYC);
route.get("/user-kyc",[verifyToken], getSingleKYC);
route.post("/add-deposit",[verifyToken], addDeposite);
route.get("/deposits",[verifyToken], allDeposites)
route.get("/user-deposits",[verifyToken], getUserDeposits)
route.post("/approve-deposit-request",[verifyToken], approveDepositRequest);
// route.post("/logout",[verifyToken], logout);
export default route;