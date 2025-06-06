import express from "express";
import { generatePdf } from "../utils/makepdf.js";

export const getUserData = async (req, res) => {
  try {
    const { userData, points, certi } = req.body;
    const pdf = await generatePdf(userData, points, certi);
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
    });
    res.send(pdf);
  } catch (error) {
    console.log(error);
  }
};
