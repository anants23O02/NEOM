import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * @param {string} base64Image - The Base64 string of the image
 * @param {string} folder - The Cloudinary folder to store the image
 * @returns {Promise<string>} - The Cloudinary secure URL of the uploaded image
 */


export const uploadImageFromBody = async (base64Image, folder = "uploads") => {
  if (!base64Image) throw new Error("No image provided");
  try {
    const uploadResponse = await cloudinary.v2.uploader.upload(base64Image, {
      folder,
      resource_type: "image",
    });

    return uploadResponse.secure_url;
  } catch (error) {
    throw new Error("Cloudinary upload failed: " + error.message);
  }
};
