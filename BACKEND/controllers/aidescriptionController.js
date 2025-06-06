import express from "express";
import convertBullet from "../utils/description.js";

export const description = async (req, res, next) => {
  const { discription, type } = req.body;
  const points = await convertBullet(discription, type);

  res.json({ success: true, data: points });
};
