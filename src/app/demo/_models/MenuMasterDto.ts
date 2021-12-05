import { SubMenuDto } from './SubMenuDto';

export class MenuMasterDto {
  menuName!: string;
  isActive!: boolean;
  routingUrl!: string;
  menuID!: string;
  subMenusList!: SubMenuDto[];
  viewOnly!: boolean;
  readWrite!: boolean;
}
