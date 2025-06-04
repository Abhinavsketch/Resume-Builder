import express from "express";
import { generatePdf } from "../utils/makepdf.js";

export const getUserData = async (req, res) => {
  const userData = req.body;
  const pdf = generatePdf(userData);
  res.send({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename = resume.pdf",
  });
  res.send(pdf);
};
