import express from "express";
import cors from "cors";

import UserRoute from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api/v1/', UserRoute);

app.listen(PORT, ()=> console.log( `Server running on port ${PORT}`));