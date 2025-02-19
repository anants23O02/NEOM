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
 