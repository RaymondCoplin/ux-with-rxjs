import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { startWith, map, mergeMap, concatMap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label for="txt">Filtro:</label>
      <input id="txt" name="txt" type="text" placeholder="Ingrese un texto" />
    </div>
    <br />
    <div *ngIf="results$ | async as users">
      <b>Resultados ({{ users.length }})</b>
      <ol>
        <li *ngFor="let user of users">{{ user.name }}</li>
      </ol>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  results$: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.results$ = fromEvent(document.getElementById('txt'), 'keyup')
      .pipe(
        map(v => (v?.target as HTMLInputElement)?.value),
        mergeMap(criteria =>
          this.http.get(`https://jsonplaceholder.typicode.com/users?${criteria ? `name=${criteria}` : '' }`)
        )
      );

  }

}
