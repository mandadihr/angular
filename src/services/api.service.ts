import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class TaskserviceService {

  constructor(private httpclient: HttpClient) {
   }
   errorHandler(error: any): void {
    return error;
  }

// internal API
// getUserName(id): Observable<any> {
//   return this.httpclient.get<any>('http://localhost:3000/getuser?userid=' + id)
//    .pipe(
//      map((e: Response) => e,
//    catchError((e: Response) => throwError(e))
//   ));
// }
// // external API
// getNewsFromExternalSource(): Observable<any> {
//   return this.httpclient.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=314b5e952f7649dc82fa5fefb34fa1f7')
//     .pipe(
//       map((e: Response) => e,
//     catchError((e: Response) => throwError(e))
//     ));
// }


// external API
getBookDetails(isbn): Observable<any> {
  return this.httpclient.get<any>('http://18.222.149.163:3000/book/getBookInfo?isbn=' + isbn)
    .pipe(
      map((e: Response) => e,
    catchError((e: Response) => throwError(e))
    ));
}

login(body): Observable<any> {
  return this.httpclient.post<any>('http://18.222.149.163:3000/login', body)
  .pipe(
    map((e: Response) => e,
    catchError((e: Response) => throwError(e)) 
    ));
}
// http://localhost:3000/book/addToLibrary
addToLibrary(body): Observable<any> {
  return this.httpclient.post<any>('http://18.222.149.163:3000/book/addToLibrary', body)
  .pipe(
    map((e: Response) => e,
    catchError((e: Response) => throwError(e)) 
    ));
}

getMyLibraryBooks(): Observable<any>{
  let userid = localStorage.getItem('UserId')
  return this.httpclient.get<any>(`http://18.222.149.163:3000/book/getBooksFromLibrary?userid=${userid}`)
  .pipe(
    map((e: Response) => e,
    catchError((e : Response) => throwError(e))
  ));
}
}



