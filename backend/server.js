import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import ConnectToDB from "./config/db.js";
import userRoutes from "./routes/user.route.js"
import userInfoRoutes from "./routes/userInfo.route.js"
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/user", userRoutes)
app.use("/api/userInfo" , userInfoRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is listening on PORT:- " , PORT)
    ConnectToDB();
})