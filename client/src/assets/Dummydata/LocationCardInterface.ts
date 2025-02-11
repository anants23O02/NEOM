export interface askReview {
    experience:string;
    image:string;
  title: string;
  date: string;
  description: string;
}
export interface About {
  event: string;
  eventDescription: string;
  evenLocation: string;
  evenLocationDescription: string;
  experience:number;
  experienceDesc: string[];
}
export interface AboutIN {
  startTime: string;
  endTime: string;
  startDate: Date;
  endDate: Date;
  guests: number;
}
export interface OperatorReview {
  title: string;
  rating: number;
  review: string;
}
export interface UserReviews {
  image: string;
  name: string;
  date: string;
  review: string;
  rating: number;
}
export interface locationCards {
  title: string;
  stars: number;
  reviews: number;
  location: string[];
  images: string[];
  about: [About, AboutIN];
  description: string[];
  id: number;
  category: string;
  operatorReview: OperatorReview;
  userReviews: UserReviews[];
}


export interface BigRecommendationCardImages {
    title:string;
    image:string;
}
export interface RecommendCards{
    card:number;
    pos:number;
}