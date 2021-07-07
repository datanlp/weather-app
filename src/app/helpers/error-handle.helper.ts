import { Observable, of } from 'rxjs';
import { LogHelper } from './log.helper';

export class ErrorHandleHelper {
  static handleError<T>(operation: string = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      LogHelper.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
