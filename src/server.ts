import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
