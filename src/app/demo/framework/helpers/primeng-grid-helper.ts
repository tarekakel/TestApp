import { LazyLoadEvent } from 'primeng/primeng';
import { SearchCriteria } from '../view-models/grid/search-criteria';

export class PrimengGridHelper<T> {

    fillPagingData(event : LazyLoadEvent, searchCriteria : SearchCriteria<T>){

        searchCriteria.pageSize = event.rows;
        searchCriteria.pageIndex = event.first > 0 ? (event.first / searchCriteria.pageSize) + 1 : 1;        
        searchCriteria.orderBy = event.sortField;
        searchCriteria.desc = event.sortOrder == -1 ? false : true;
    }
}