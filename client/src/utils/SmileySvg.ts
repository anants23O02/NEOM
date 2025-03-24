import anger from "../assets/img/anger.svg";
import appreciation from "../assets/img/appreciation.svg";
import boredom from "../assets/img/boredom.svg";
import disappointed from "../assets/img/disappointed.svg";
import joy from "../assets/img/joy.svg";
import overwhelmed from "../assets/img/overwhelmed.svg";


export  const smileyReviews = [overwhelmed,appreciation,joy,boredom,disappointed,anger].reverse()
// 
const reviews = {
  0.5: {
    image: anger,
    description: [
      "Completely disappointing.",
      "Rating: 0.5 - Unacceptable"
    ]
  },
  1.0: {
    image: disappointed,
    description: [
      "Poor quality experience.",
      "Rating: 1.0 - Subpar"
    ]
  },
  1.5: {
    image: boredom,
    description: [
      "Below expectations.",
      "Rating: 1.5 - Mediocre"
    ]
  },
  2.5: {
    image: disappointed,
    description: [
      "Average with improvements.",
      "Rating: 2.5 - Satisfactory"
    ]
  },
  3.5: {
    image: joy,
    description: [
      "Good, but needs tweaks.",
      "Rating: 3.5 - Solid"
    ]
  },
  4.5: {
    image: overwhelmed,
    description: [
      "Great, highly recommended.",
      "Rating: 4.5 - Excellent"
    ]
  }
};



export const getReview = (rating) => {

  const closestRating = Object.keys(reviews).reduce((prev, curr) => {
    return Math.abs(curr - rating) < Math.abs(prev - rating) ? curr : prev;
  });

  return reviews[closestRating] || null;
};

