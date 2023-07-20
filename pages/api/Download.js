import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public/assets/resume", "01Sebastine_Ogu_Front-end_Web_developer.pdf"); // Replace 'example.pdf' with the actual filename and path of the file you want to download.

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).end("Error reading the file");
    } else {
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="01Sebastine_Ogu_Front-end_Web_developer.pdf"'
      ); // Replace 'example.pdf' with the desired name for the downloaded file.
      res.setHeader("Content-Type", "application/pdf"); // Replace 'application/pdf' with the appropriate MIME type for your file.

      res.send(data);
    }
  });
}
