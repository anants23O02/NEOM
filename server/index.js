import express from "express";
import authRouter from "./src/router/authRoutes.js";
import cookieParser from "cookie-parser";
import adminRouter from "./src/router/adminRouter.js";
import dataRouter from "./src/router/dataRouter.js";
import cors from "cors";
const app = express();
app.use(cookieParser());
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/auth", authRouter);
app.use("/api/admin",adminRouter);
app.use("/api/",dataRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
