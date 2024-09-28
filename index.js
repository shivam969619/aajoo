import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import authRoutes from "./routes/route.js"

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1',authRoutes);

const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.json("hwllo world")
})
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
