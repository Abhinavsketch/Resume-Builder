import express from "express";
import cors from "cors";
import resumeRouter from "./routes/resume.js";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.set("view engine", "ejs");

//MiddleWare
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/resume", resumeRouter);

app.get("/", (req, res, next) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log("Server is running");
});
