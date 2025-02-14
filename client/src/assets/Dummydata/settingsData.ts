import {settingsDataInterface} from './LocationCardInterface'

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