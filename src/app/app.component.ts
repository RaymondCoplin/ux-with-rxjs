import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="onSubmit()">Submit</button>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  click$ = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.click$.pipe(
      exhaustMap(_ =>
        this.http.get(`https://jsonplaceholder.typicode.com/users`)
      )
    ).subscribe();

  }

  onSubmit() {
    this.click$.next('click');
  }

}
