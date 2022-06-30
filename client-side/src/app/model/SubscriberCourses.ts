import {Subscriber} from "./Subscriber";
import {Course} from "./Course";

export interface SubscriberCourses {

  id: number,
  status: string,
  course: Course;
  subscriber: Subscriber

}
