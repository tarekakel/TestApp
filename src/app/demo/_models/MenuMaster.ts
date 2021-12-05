import { SubMenuMaster } from './SubMenuMaster';

export class MenuMaster {
  id!: string;
  menuName!: string;
  isActive!: boolean;
  routingUrl!: string;
  subMenu!: SubMenuMaster[];
}
