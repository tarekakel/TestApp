import { UserDto } from '../shared/view-models/UserDto';

export class Group {
  id!: string;
  idString!: string;
  name!: string;
  email!: string;
  applicationId!: string;
  applicationEnglishName!: string;
  applicationArabicName!: string;
  users!: UserDto[];
}
