import express from "express";
import {handlePayment,initiatePayment} from "../controller/PaymentController/createPayment.js";
import {paymentMiddleware} from "../middleware/paymentMiddleware.js";


const Router = express.Router();

Router.post("/confirm",handlePayment);
Router.post("/initiate",initiatePayment);
export default Router;