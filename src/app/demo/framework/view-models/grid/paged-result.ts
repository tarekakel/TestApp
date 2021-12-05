export class PagedResult<T> {
  numberOfRecords: number | undefined;
  collection: T[] | undefined;
}
