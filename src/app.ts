import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import characterRoutes from "./routes/character.routes";


dotenv.config();

const app = express();



app.use(cors());
app.use(express.json());
app.use("/api/characters", characterRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Muminkopedia API działa 🚀" });
});


export default app;