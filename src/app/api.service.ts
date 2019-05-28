import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Pessoa } from 'src/model/pessoa';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/pessoas';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPessoas (): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(apiUrl)
      .pipe(
        tap(pessoas => console.log('lista de pessoas')),
        catchError(this.handleError('getPessoas', []))
      );
  }

  getPessoa(cpf: string): Observable<Pessoa> {
    const url = `${apiUrl}/${cpf}`;
    return this.http.get<Pessoa>(url).pipe(
      tap(_ => console.log(`pessoa de cpf=${cpf}`)),
      catchError(this.handleError<Pessoa>(`getPessoa cpf=${cpf}`))
    );
  }

   addPessoa (pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(apiUrl, pessoa, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((pessoa: Pessoa) => console.log(`adicionou pessoa com w/ id=${pessoa.id}`)),
      catchError(this.handleError<Pessoa>('addPessoa'))
    );
  }

   deletePessoa (id): Observable<Pessoa> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Pessoa>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a pessoa com id=${id}`)),
      catchError(this.handleError<Pessoa>('deletePessoa'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
