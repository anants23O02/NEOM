import express from "express";
import {handlePayment} from "../controller/PaymentController/createPayment.js";
import {paymentMiddleware} from "../middleware/paymentMiddleware.js"

const Router = express.Router();

Router.post("/create-payment", paymentMiddleware,handlePayment);

export default Router;