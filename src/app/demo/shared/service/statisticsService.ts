import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { StatisticFilter } from "../view-models/StatisticFilter";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class StatisticsService extends BaseService {

    constructor() {

        super();
    }

    getStatusStatistics(statisticFilter : StatisticFilter) {

        return this.apiHelper.post<StatisticFilter, any>(Urls.getStatusStatisticsUrl, statisticFilter);
    }

    getTypeStatistics(statisticFilter: StatisticFilter) {

        return this.apiHelper.post<StatisticFilter, any>(Urls.getTypeStatisticsUrl, statisticFilter);
    }
    getPriorityStatistics(statisticFilter: StatisticFilter) {

        return this.apiHelper.post<StatisticFilter, any>(Urls.getPriorityStatisticsUrl, statisticFilter);
    }

    getResponseTimeStatistics(statisticFilter: StatisticFilter) {

        return this.apiHelper.post<StatisticFilter, any>(Urls.getResponseTimeStatisticsUrl, statisticFilter);
    }
    
}

