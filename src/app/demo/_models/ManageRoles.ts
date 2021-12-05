import { MenuMaster } from './MenuMaster';

export class ManageRoles {
  id!: string;
  role!: string;
  isActive!: boolean;
  menuId!: string[];
  menus!: MenuMaster[];
}
