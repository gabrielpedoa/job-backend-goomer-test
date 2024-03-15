import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import routes from "./config/routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes());

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
