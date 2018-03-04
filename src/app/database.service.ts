import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Database } from './database';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DatabaseService {

  private databaseUrl = 'api/databases';

  constructor(
    private http: HttpClient 
  ) { }

  /** GET databases from the server */
  getDatabases (): Observable<Database[]> {
    return this.http.get<Database[]>(this.databaseUrl)
      .pipe(
        tap(databases => this.log(`fetched databases`)),
        catchError(this.handleError('getDatabases', []))
      );
  }

  /** GET database by id. Return `undefined` when id not found */
  getDatabaseNo404<Data>(id: number): Observable<Database> {
    const url = `${this.databaseUrl}/?id=${id}`;
    return this.http.get<Database[]>(url)
      .pipe(
        map(databases => databases[0]), // returns a {0|1} element array
        tap(d => {
          const outcome = d ? `fetched` : `did not find`;
          this.log(`${outcome} database id=${id}`);
        }),
        catchError(this.handleError<Database>(`getDatabase id=${id}`))
      );
  }

  /** GET database by id. Will 404 if id not found */
  getDatabase(id: number): Observable<Database> {
    const url = `${this.databaseUrl}/${id}`;
    return this.http.get<Database>(url).pipe(
      tap(_ => this.log(`fetched database id=${id}`)),
      catchError(this.handleError<Database>(`getDatabase id=${id}`))
    );
  }

  /* GET databases whose name contains search term */
  searchDatabases(term: string): Observable<Database[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Database[]>(`api/databases/?name=${term}`).pipe(
      tap(_ => this.log(`found databases matching "${term}"`)),
      catchError(this.handleError<Database[]>('searchDatabases', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addDatabase (database: Database): Observable<Database> {
    return this.http.post<Database>(this.databaseUrl, database, httpOptions).pipe(
      tap((database: Database) => this.log(`added database w/ id=${database.id}`)),
      catchError(this.handleError<Database>('addDatabase'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteDatabase (database: Database | number): Observable<Database> {
    const id = typeof database === 'number' ? database : database.id;
    const url = `${this.databaseUrl}/${id}`;

    return this.http.delete<Database>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted database id=${id}`)),
      catchError(this.handleError<Database>('deleteDatabase'))
    );
  }

  /** PUT: update the hero on the server */
  updateDatabase (database: Database): Observable<any> {
    return this.http.put(this.databaseUrl, database, httpOptions).pipe(
      tap(_ => this.log(`updated database id=${database.id}`)),
      catchError(this.handleError<any>('updateDatabase'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
  }
}

