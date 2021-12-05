import { AssignedTo } from "./AssignedTo";
import { ApplicationSetting } from "./ApplicationSetting";

export class Application {
  id: string;
  idString: string = null;
  englishName: string;
  arabicName: string;
  apiKey: string;
  secretKey: string;
  isPublished: boolean = true;
  defaultAssignTo: AssignedTo = null;
  settings: ApplicationSetting[] = new Array<ApplicationSetting>();
}
