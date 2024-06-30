import express from "express";
// <<<<<<< Updated upstream
import {
    create, deleteUser, getAll, getOne, update, login, createkYC, getAllKYC,
    addDeposite, allDeposites, approveDepositRequest, getUserDeposits, getSingleKYC,
    getUserwithdrawn, getWithdrawn, addfond, approveFondRequest, logout, getUsertransation, gettransation
} from "../controller/usercontroller.js";
// =======
// import {
//     create, deleteUser, getAll, getOne, update, login, createkYC, getAllKYC,
//     addDeposite, allDeposites, approveDepositRequest, getUserDeposits, getSingleKYC,
//     getUserwithdrawn, getWithdrawn, addfond, approveFondRequest, logout
// } from "../controller/usercontroller.js";
// >>>>>>> Stashed changes
import { isAdmin, verifyToken } from '../middleware/middleware.js';

// create api
const route = express.Router();


route.post("/create", create);
route.get('/getalluser', [verifyToken], getAll);
route.get("/getone/:id", [verifyToken], getOne);
route.put("/update", [verifyToken], update);
// route.delete("/delete/:id",[verifyToken, isAdmin], deleteUser)
route.delete("/delete/:id", [verifyToken], deleteUser)

// login api 
route.post("/login", login);
route.post("/kyc", createkYC);
route.get("/all-kyc", getAllKYC);
route.get("/user-kyc", [verifyToken], getSingleKYC);
route.post("/add-deposit", [verifyToken], addDeposite);
route.get("/deposits", [verifyToken], allDeposites)
route.get("/user-deposits", [verifyToken], getUserDeposits)
route.post("/approve-deposit-request", [verifyToken], approveDepositRequest);
route.get("/user-withdrawn", [verifyToken], getUserwithdrawn)
route.get("/withdrawn", [verifyToken], getWithdrawn)
route.post("/add-fond", [verifyToken], addfond);
route.post("/approve-fond-request", [verifyToken], approveFondRequest);
route.post("/logout", logout);
// <<<<<<< Updated upstream
route.get("/user-transation-details", [verifyToken], getUsertransation)
route.get("/transation-details", [verifyToken], gettransation)
// =======
// [verifyToken]
// >>>>>>> Stashed changes

export default route;