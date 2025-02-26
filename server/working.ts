//schemas for database

const event = {
  id: 1,
  title: "Surfing at Leasure",
  stars: 4.0,
  reviews: 23,
  city: "Sindalah City",
  country: "Dubai",
  images: [sufring],
  eventType: 1,
  aboutLocation: 1,
  userExperience: 1,
  startDate: new Date(2025, 9, 10, 10, 30),
  endDate: new Date(2025, 9, 10, 10, 30),
  category: "Water Sports",
  evenDesc: [
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
  ],
};

//operator review from different table via their FK(eventID)
//user review from different table via their FK(eventID)

const eventTypeDescription = [
  {
    typeid: 1,
    event: "Surfing",
    eventDescription: eventDescriptions[0],
  },
];

const aboutLocation = [
  {
    aboutLocationid: 1,
    evenLocation: "Great Location",
    evenLocationDescription:
      "Every guest has given a five start rating to this location",
  },
];

const userExperience = [
  {
    userExperienceId: 1,
    experience: "Invigorating & Uplifting Experience",
    experienceDesc:
      "This event has a rating of 5.0 which makes this event Overwhlemed",
  },
];

const user = [
  {
    userId: 1,
    profilePic: "image path",
    firstName: "Charlie",
    lastName: "John",
    phoneNo: 9889286802,
    birthDay: new Date("08-01-1979"),
    interestCards: [0, 3, 5],//Primary key's from events table
    interests: [],
    scheduledEvents: [1, 2, 3, 4],//Primary key's from events table
    attendedEvents: [4,3,2,1],//Primary key's from events table
    favortiteEvents:[4, 1, 2, 3, 4, 4, 1, 2, 3, 5],//Primary key's from events table
  },
];

const userReviews =[ 
    {
        reviewId: 1,
        eventId:1,//for which event this review is 
        userId:1,//which use gave this event
        rating:5,//what rating the user gave this 
        description: "lorem ipsum",//what user says in review
    }
]
 


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

// Google OAuth Config
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:5000/auth/google/callback";

// Login URL (Frontend will redirect here)
app.get("/auth/google", (req, res) => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email profile&access_type=offline`;
    res.redirect(authUrl);
});

// Google OAuth Callback
app.get("/auth/google/callback", async (req, res) => {
    const code = req.query.code;
    
    if (!code) return res.status(400).send("No authorization code provided");

    try {
        // Exchange code for access token
        const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: "authorization_code",
            code
        });

        const { access_token, id_token } = tokenRes.data;

        // Get user info from Google
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
        const user = userRes.data;

        // Generate JWT token
        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Set token in cookies
        res.cookie("token", token, { httpOnly: true });

        res.redirect("http://localhost:5173/dashboard"); // Redirect to frontend
    } catch (error) {
        console.error("OAuth Error:", error.response?.data || error.message);
        res.status(500).send("OAuth Authentication Failed");
    }
});

// Check Authenticated User
app.get("/auth/user", (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("Unauthorized");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json(decoded.user);
    } catch (error) {
        res.status(401).send("Invalid Token");
    }
});

// Logout
app.get("/auth/logout", (req, res) => {
    res.clearCookie("token");
    res.send("Logged out");
});

// Start Server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));




//CREATE A UTIL FUNCTION FOR IMAGE UPLOADS <<
//FIX THE DATABASE BY SAVING THIS DATA AND STORING FILE ON CLOUDINARY
// CLEAR COOKIE WHEN USER GOES TO SIGNUP PAGE AND GENERATE A NEW JWT TOKEN THEN SEND HIM AGAIN TO /USER
//THEN WORK ON LOGIN USING EMAIL AND PASSWORD
//MODIFY CARDS TO WORK WITH DATA FROM EVENTS IN DATABASE
//SEND ATTENDED SCHEDULED AND FAVORITE CARDS ON THE FRONTEND
//RENDER DATA AS PER THE DATA FROM BACKEND
//START WORKING ON FUNCTIONALITY 