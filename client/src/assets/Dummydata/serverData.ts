
import image1 from '../img/yoga.jpg';
import image2 from '../img/island.jpg'; 
import image3 from '../img/art.jpg';
import {settingsDataInterface} from './LocationCardInterface';
import {BigRecommendationCardImages} from './LocationCardInterface';




export const data:BigRecommendationCardImages[] = [
    {
        title:'Explore the deep sea',
        image:image1,
    },
    {
        title:'Explore the island',
        image:image2,
    },
    {
        title:'Explore the art',
        image:image3,
    },
]

export const RecommendCards = [
    {
      card: 0,
      pos: 1,
    },
    {
      card: 1,
      pos: 2,
    },
    {
      card: 2,
      pos: 3,
    },
    {
      card: 3,
      pos: 4,
    },
    {
      card: 4,
      pos: 5,
    },
  ];
  
export const UpcomingEvents:number[] = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];

export const settingsData:settingsDataInterface[] = [
  {
      heading:'Personal and Account Information',
      description: 'Would you like to share your personal information with us to know you better?',
      buttonType:'HeadingButtonToggleSwitch',
      options:[],
  },
  {
      heading:'Consent for sharing information with operators',
      description: 'Would you like to share your personal information with operators to serve you better?',
      buttonType:'HeadingButtonToggleSwitch',
      options:[],
  },{
      heading:'Manage your data',
      description: 'Labore in consequat aliqua nostrud ex.Aliqua duis laborum duis mollit fugiat incididunt est dolor.',
      buttonType:'HeadingButtonToggleSwitch',
      options:[],
  },{
      heading:'Password and Security',
      description: 'Labore in consequat aliqua nostrud ex.Aliqua duis laborum duis mollit fugiat incididunt est dolor.',
      buttonType:'HeadingButtonToggleSwitch',
      options:[],
  },{
      heading:'Notifications',
      description: 'Which type of notification would you like to recieve?',
      buttonType:'OptionButtonToggleSwitch',
      options:['Emails','Newsletters','Personalized Notification'],
  },{
      heading:'Language',
      description: 'Culpa consectetur do magna duis ut mollit enim irure amet amet magna do eiusmod.',
      buttonType:'OptionButtonRadioButton',
      options:['English','French','Arabic'],
  },
]
