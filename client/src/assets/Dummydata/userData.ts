// import image from '../img/socializing';
import userDataInterface from "./LocationCardInterface";

export  const userCharlie:userDataInterface = {
    userId:0,
    profilePic:'this',
    name: 'Charlie',
    email: 'Charlie@gmail.com',
    phoneNo: 9889286809,
    birthDay: new Date('08-01-1979'),
    interestCards: [0,3,5],
    interests:[],
    scheduledEvents:[1,2,3,4],
    attendedEvents:[
        {
            eventId:4,
            rating:4,
        },{
            eventId:3,
            rating:5,
        },{
            eventId:2,
            rating:-1,
        },{
            eventId:3,
            rating:2,
        }
        ,{
            eventId:4,
            rating:3,
        }
    ],
    favortiteEvents:[0,1,2,3,4,0,1,2,3]
}