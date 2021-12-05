
export class Application {

    id: string;
    englishName: string;
    arabicName: string;
    type: any;
    priority: any;
    forwardTo: any;
    days: number;
    hours: number;
} 

export class SubApplcation {

    id: string;
    applicationId: string;
    englishName: string;
    arabicName: string;
    defaultTitle: string;
}

export class Service {

    id: string;
    subApplicationId: string;
    englishName: string;
    arabicName: string;
    defaultTitle: string;
}

export class SubService {

    id: string;
    subApplicationId: string;
    englishName: string;
    arabicName: string;
    defaultTitle: string;
}
