import {Consumer} from "./Consumer";
import {Course} from "./Course";

export interface Subscriber {

  id: number,
  firstName: string,
  lastName: number,
  email: string,
  mobileNumber: string,
  username: string,
  password: string,
  role: string;
  courses: Course[]

}
