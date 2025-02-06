import art from '../img/art.jpg'
import surfing from '../img/surfing.jpg';
import mountain from '../img/mountain.jpg'
import {askReview} from './LocationCardInterface.ts'
import exp1 from '../img/overwhelmed.svg';
import exp2 from '../img/joy.svg';
import exp3 from '../img/boredom.svg';

const exp = [exp1,exp2,exp3];

export const askReview: askReview[] = [
  {
    experience:exp[0],
    image:art,
    title: "Indulge in Finest Epicurean Cuisines",
    date: "on Nov 17,2022",
    description:
      "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
    experience:exp[1],
    image:surfing,
    title: "Surfing at Leisure",
    date: "on Nov 16,2022",
    description:
      "Hello Susan, we noticed that you have amazing surfing skills and we hope that you had a great time here while surfing. How was your experience with us! Would you mind sharing with?",
  },{
    experience:exp[2  ],
    image:mountain,
    title: "Dive into Exciting Island Holiday Experiences",
    date: "on Nov 15,2022",
    description:
      "Hello Susan, we noticed that you have amazing surfing skills and you had a great time while surfing. Please share your experience with us! Would you mind sharing with?",
  },
];
