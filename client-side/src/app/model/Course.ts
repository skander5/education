import {Subscriber} from "./Subscriber";
import {Category} from "./Category";

export interface Course {

  id: number,
  title: string,
  description: string,
  beginDate: Date;
  endDate: Date;
  duree: number;
  maxSubscriber: number;
  subscriberList: Subscriber[];
  category: Category;
}
