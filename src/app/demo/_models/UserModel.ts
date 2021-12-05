import { ManageUsers } from './ManageUsers';

export class UserModel {
  userList!: ManageUsers[];
  inactiveUsers!: number;
  activeUsers!: number;
  activeContacts!: number;
  inactiveContacts!: number;
  contactsLoggedInToday!: number;
}
