import type { locationCards } from "./LocationCardInterface";
import golf from "../img/Golf.jpg";
import surfing from '../img/surfing.jpg';
import rooms from '../img/island.jpg';
import {userReviews} from './UserReviews';

const eventDescription = [
  [
    "Invigorating & Uplifting Experience",
    "This event has a rating of 5.0 which makes this event Overwhlemed",
  ],
  [
    "Invigorating & Uplifting Experience",
    "This event has a rating of 5.0 which makes this event Overwhlemed",
  ],
];


export const LocationCards: locationCards[] = [
  {
    title: "Round of Golf",
    stars: 5.0,
    reviews: 23,
    location: ["Sindalah City","Dubai"],
    images: [golf],
    about: [
      {
        event: "Golf",
        eventDescription:
          "This is one of the many events that come under golf category",
        evenLocation: "Great Location",
        evenLocationDescription:
          "Every guest has given a five start rating to this location",
        experience: 5,
        experienceDesc: eventDescription[0],
      },
      {
        startTime: "10:30 AM",
        endTime: "06:30 PM",
        startDate: new Date("2025-03-02"),
        endDate: new Date("2025-03-07"),
        guests: 1,
      },
    ],
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    ],
    id: 1,
    category: "Golf",
    operatorReview: {
      title: "Operator River Stone",
      rating: 4.9,
      review:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    },
    userReviews: userReviews,
  },
  {
    title: "Surfing at Leasure",
    stars: 5.0,
    reviews: 23,
    location: ["Sindalah City","Dubai"],
    images: [surfing],
    about: [
      {
        event: "surfing",
        eventDescription:
          "This is one of the many events that come under golf category",
        evenLocation: "Great Location",
        evenLocationDescription:
          "Every guest has given a five start rating to this location",
        experience: 5,
        experienceDesc: eventDescription[0],
      },
      {
        startTime: "10:30 AM",
        endTime: "06:30 PM",
        startDate: new Date("2025-03-02"),
        endDate: new Date("2025-03-07"),
        guests: 1,
      },
    ],
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    ],
    id: 2,
    category: "Water Sports",
    operatorReview: {
      title: "Operator River Stone",
      rating: 4.9,
      review:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    },
    userReviews: userReviews,
  },
  {
    title: "Dive into Exciting Island Holiday Experience",
    stars: 5.0,
    reviews: 23,
    location: ["Sindalah City", "Dubai"],
    images: [rooms],
    about: [
      {
        event: "Golf",
        eventDescription:
          "This is one of the many events that come under golf category",
        evenLocation: "Great Location",
        evenLocationDescription:
          "Every guest has given a five start rating to this location",
        experience: 5,
        experienceDesc: eventDescription[0],
      },
      {
        startTime: "10:30 AM",
        endTime: "06:30 PM",
        startDate: new Date("2025-03-02"),
        endDate: new Date("2025-03-07"),
        guests: 1,
      },
    ],
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    ],
    id: 3,
    category: "Golf",
    operatorReview: {
      title: "Operator River Stone",
      rating: 4.9,
      review:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    },
    userReviews: userReviews,
  },
  {
    title: "Round of Golf",
    stars: 5.0,
    reviews: 23,
    location: ["Sindalah City", "Dubai"],
    images: [golf],
    about: [
      {
        event: "Golf",
        eventDescription:
          "This is one of the many events that come under golf category",
        evenLocation: "Great Location",
        evenLocationDescription:
          "Every guest has given a five start rating to this location",
        experience: 5,
        experienceDesc: eventDescription[0],
      },
      {
        startTime: "10:30 AM",
        endTime: "06:30 PM",
        startDate: new Date("2025-03-02"),
        endDate: new Date("2025-03-07"),
        guests: 1,
      },
    ],
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    ],
    id: 4,
    category: "Golf",
    operatorReview: {
      title: "Operator River Stone",
      rating: 4.9,
      review:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    },
    userReviews: userReviews,
  },
  {
    title: "Surfing at Leasure",
    stars: 5.0,
    reviews: 23,
    location: ["Sindalah City", "Dubai"],
    images: [surfing],
    about: [
      {
        event: "surfing",
        eventDescription:
          "This is one of the many events that come under golf category",
        evenLocation: "Great Location",
        evenLocationDescription:
          "Every guest has given a five start rating to this location",
        experience: 5,
        experienceDesc: eventDescription[0],
      },
      {
        startTime: "10:30 AM",
        endTime: "06:30 PM",
        startDate: new Date("2025-03-02"),
        endDate: new Date("2025-03-07"),
        guests: 1,
      },
    ],
    description: [
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    ],
    id: 5,
    category: "Water Sports",
    operatorReview: {
      title: "Operator River Stone",
      rating: 4.9,
      review:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    },
    userReviews: userReviews,
  },
];
