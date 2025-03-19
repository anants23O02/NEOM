import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const initiatePayment = async (req, res) => {
  try {
    const amount = req.body.amount;
    console.log("amount :>> ", amount);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const handlePayment = async (req, res) => {
  try {
    const { paymentIntentId } = req.body; // PaymentIntent ID from frontend

    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);

    if (paymentIntent.status === "succeeded") {
      return res.json({ message: "Payment Successful!" });
    }

    res.json({ message: "Payment failed!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
