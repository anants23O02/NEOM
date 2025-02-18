import anger from "../assets/img/anger.svg";
import appreciation from "../assets/img/appreciation.svg";
import boredom from "../assets/img/boredom.svg";
import disappointed from "../assets/img/disappointed.svg";
import joy from "../assets/img/joy.svg";
import overwhelmed from "../assets/img/overwhelmed.svg";

export  const smileyReviews = [anger, appreciation, boredom, disappointed, joy, overwhelmed]

const reviews = {
  0.5: {
    image: anger,
    description: [
      "Extremely disappointing, a complete waste of time.",
      "This event has a rating of 0.5 which makes this event Unacceptable"
    ]
  },
  1.0: {
    image: disappointed,
    description: [
      "Very poor experience, lacks value and quality.",
      "This event has a rating of 1.0 which makes this event Subpar"
    ]
  },
  1.5: {
    image: boredom,
    description: [
      "Below expectations, could use a lot of improvement.",
      "This event has a rating of 1.5 which makes this event Mediocre"
    ]
  },
  2.5: {
    image: disappointed,
    description: [
      "An average event, a few highlights but still needs improvements.",
      "This event has a rating of 2.5 which makes this event Satisfactory"
    ]
  },
  3.5: {
    image: joy,
    description: [
      "Good experience, but could use a few enhancements.",
      "This event has a rating of 3.5 which makes this event Solid"
    ]
  },
  4.5: {
    image: overwhelmed,
    description: [
      "Great event, highly recommended with minor improvements.",
      "This event has a rating of 4.5 which makes this event Excellent"
    ]
  }
};


export const getReview = (rating) => {

  const closestRating = Object.keys(reviews).reduce((prev, curr) => {
    return Math.abs(curr - rating) < Math.abs(prev - rating) ? curr : prev;
  });

  return reviews[closestRating] || null;
};
