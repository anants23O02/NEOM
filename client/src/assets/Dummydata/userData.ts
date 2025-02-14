import type { askReview } from "./LocationCardInterface.ts";
import art from "../img/art.jpg";
import surfing from "../img/surfing.jpg";
import mountain from "../img/mountain.jpg";
import exp1 from "../img/overwhelmed.svg";
import exp2 from "../img/joy.svg";
import exp3 from "../img/boredom.svg"; // import image from '../img/socializing';
import userDataInterface from "./LocationCardInterface";

const exp = [exp1, exp2, exp3];

export const userCharlie: userDataInterface = {
  userId: 0,
  profilePic: "this",
  name: "Charlie",
  email: "Charlie@gmail.com",
  phoneNo: 9889286809,
  birthDay: new Date("08-01-1979"),
  interestCards: [0, 3, 5],
  interests: [],
  scheduledEvents: [1, 2, 3, 4],
  attendedEvents: [
    {
      eventId: 4,
      rating: 4,
    },
    {
      eventId: 3,
      rating: 5,
    },
    {
      eventId: 2,
      rating: -1,
    },
    {
      eventId: 3,
      rating: 2,
    },
    {
      eventId: 4,
      rating: 3,
    },
  ],
  favortiteEvents: [4, 1, 2, 3, 4, 4, 1, 2, 3, 5],
  AskReview: [
    {
      experience: exp[0],
      image: art,
      title: "Indulge in Finest Epicurean Cuisines",
      date: "on Nov 17,2022",
      description:
        "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
    },
    {
      experience: exp[1],
      image: surfing,
      title: "Surfing at Leisure",
      date: "on Nov 16,2022",
      description:
        "Hello Susan, we noticed that you have amazing surfing skills and we hope that you had a great time here while surfing. How was your experience with us! Would you mind sharing with?",
    },
    {
      experience: exp[2],
      image: mountain,
      title: "Dive into Exciting Island Holiday Experiences",
      date: "on Nov 15,2022",
      description:
        "Hello Susan, we noticed that you have amazing surfing skills and you had a great time while surfing. Please share your experience with us! Would you mind sharing with?",
    },
  ],
};
