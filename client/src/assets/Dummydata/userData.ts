import image from '';
import userDataInterface from "./LocationCardInterface";

export default const userCharlie:userDataInterface = {
    userId:0,
    profilePic:image,
    name: 'Charlie',
    email: 'Charlie@gmail.com',
    phoneNo: 9889286809,
    birthDay: new Date('08-01-1979'),
    interestCards: [0,3,5],
    interests:[],
    scheduledEvents:[0,1,2,3],
    // attendedEvents:[0,1,2,3],
    attendedEventRatings:[
        {
            eventId:0,
            rating:4,
        },{
            eventId:1,
            rating:5,
        },{
            eventId:2,
        },{
            eventId:3,
            rating:2,
        }
    ],
    favortiteEvents:[0,1,2,3,4,0,1,2,3]
}