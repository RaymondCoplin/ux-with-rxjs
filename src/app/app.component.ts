import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label for="txt">Filtro:</label>
      <input id="txt" name="txt" type="text" placeholder="Ingrese un texto" />
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    fromEvent(document.getElementById('txt'), 'keyup')
      .pipe(
        map(v => (v?.target as HTMLInputElement)?.value)
      )
      .subscribe(value => console.log(value));

  }

}
