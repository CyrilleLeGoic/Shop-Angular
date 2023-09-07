export interface ResultRequest<T> {
  isSuccess: boolean;
  statusCode: number;
  lenght : number;
  results: Array<T>;
}
