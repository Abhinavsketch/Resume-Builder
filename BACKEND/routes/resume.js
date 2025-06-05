import express from "express";
import { getUserData } from "../controllers/resumeController.js";
import { description } from "../controllers/aidescriptionController.js";

const resumeRouter = express.Router();

resumeRouter.post("/generatepdf", getUserData);
resumeRouter.post("/description", description);

export default resumeRouter;
