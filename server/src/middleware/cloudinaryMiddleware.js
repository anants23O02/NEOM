import multer from "multer";
import { uploadImageFromBody } from "../utils/uploadImage.js";

const upload = multer({ storage: multer.memoryStorage() });

export const uploadImage = (options = { required: true }) => {
  return (req, res, next) => {
    upload.single("images")(req, res, async (err) => {
      if (err) return res.status(400).json({ error: "File upload failed" });

      if (!req.file) {
        if (options.required) {
          return res.status(400).json({ error: "No image uploaded" });
        } else {
  
          return next();
        }
      }

      try {
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
        const folder = req.body.firstname ? "profiles" : "neom";
        const imageUrl = await uploadImageFromBody(base64Image, folder); 
        req.body.picture = imageUrl;
        next();
      } catch (error) {
        res.status(500).json({ error: "failing now" });
      }
    });
  };
};
