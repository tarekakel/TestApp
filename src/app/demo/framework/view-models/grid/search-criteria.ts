export class SearchCriteria<T> {
  pageIndex: number | undefined;
  pageSize: number | undefined;
  orderBy: string | undefined;
  desc: boolean | undefined;
  take = 10;
  skip = 0;
  filters: T | undefined;
}
