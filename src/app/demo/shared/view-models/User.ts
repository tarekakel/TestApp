import { ApplicationsUser } from "./ApplicationsUser";

export class User {
  username: string;
  email: string;
  id: string;
  applicationId: string = null;
  roles: string[] = null;
  fullName: string;
  mobileNumber: string;
  applicationEnglishName: string;
  applicationArabicName: string;
  password: string;
  oldPassword: string;
}
