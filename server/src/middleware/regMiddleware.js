import multer from "multer";

const upload = multer();
export const regMiddleware = (req, res, next) => {
    upload.none()(req, res, () => {
        console.log("req.body :>> ", req.body); // Should log form-data
        next();
    });
};
//FIX THE DATABASE BY SAVING THIS DATA AND STORING FILE ON CLOUDINARY
//THEN WORK ON LOGIN USING EMAIL AND PASSWORD
//MODIFY CARDS TO WORK WITH DATA FROM EVENTS IN DATABASE
//SEND ATTENDED SCHEDULED AND FAVORITE CARDS ON THE FRONTEND
//RENDER DATA AS PER THE DATA FROM BACKEND
//START WORKING ON FUNCTIONALITY