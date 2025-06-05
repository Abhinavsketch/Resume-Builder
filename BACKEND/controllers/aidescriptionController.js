import express from "express";
import convertBullet from "../utils/description.js";

export const description = async (req, res, next) => {
  const { discription } = req.body;
  const points = await convertBullet(discription);

  res.json({ success: true, data: points });
};
