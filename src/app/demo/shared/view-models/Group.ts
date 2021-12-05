import { UserDto } from "./UserDto";

export class Group {
  id: string;
  idString: string;
  name: string;
  email: string;
  applicationId: string = null;
  applicationEnglishName: string;
  applicationArabicName: string;
  users: UserDto[];
}
