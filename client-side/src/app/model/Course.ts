import {Subscriber} from "./Subscriber";

export interface Course {

  id: number,
  title: string,
  description: string,
  beginDate: Date;
  endDate: Date;
  duree: number;
  subscriberList: Subscriber[]

}
