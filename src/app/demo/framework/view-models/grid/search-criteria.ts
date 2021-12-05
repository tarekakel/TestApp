export class SearchCriteria<T> {
  pageIndex: number;
  pageSize = 10;
  orderBy: string;
  desc: boolean;
  take = 10;
  skip = 0;
  filters: T;
}
