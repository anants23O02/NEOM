import express from "express";
import authRouter from "./router/authRoutes.js"

// const PORT = 5000
const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/auth',authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});