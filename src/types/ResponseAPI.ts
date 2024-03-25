export interface ResponseAPI<T = undefined> {
  data: T;
  currentPage: number;
  from: number;
  lastPage: number;
  limit: number;
  skip: number;
  to: number;
  total: number;
}
