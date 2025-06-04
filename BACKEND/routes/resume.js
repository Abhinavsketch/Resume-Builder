import express from "express";
import { getUserData } from "../controllers/resumeController.js";

const resumeRouter = express.Router();

resumeRouter.post("/generatepdf", getUserData);

export default resumeRouter;
