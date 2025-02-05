export interface askReview{
    title:string;
    date:string;
    description:string;
}


export interface About {
    event:string;
    eventDescription:string;
    evenLocation:string;
    evenLocationDescription:string;
    experienceDesc:string[];
}
export interface AboutIN
{
    startTime: string;
    endTime: string;
    startDate: Date;
    endDate: Date;
    guests: number;
  }
// fix about interface
export interface OperatorReview{
    title:string;
    rating:number;
    review:string;
}

export interface userReviews{
    image:string;
    name:string;
    date:string;
    review:string;
    rating:number;
}

export interface LocationCards {
    title: string;
    stars: number;
    reviews: number;
    location: string[];
    images: [];
    about: [About, AboutIN];
    description:string[];
    id:number;
    category: string;
    operatorReview: OperatorReview;
    userReviews:userReviews[];
    
}

// ADD IMAGES BY IMPORTING AS USED IN COMPONENTS