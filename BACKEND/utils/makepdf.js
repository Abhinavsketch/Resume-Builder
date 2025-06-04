import express from "express";
import puppeteer from "puppeteer";

export const generatePdf = async (userData) => {
  const html = await ejs.renderFile("user.ejs", { userData });
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  return pdfBuffer;
};
