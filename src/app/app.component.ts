import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    
  `,
  styles: []
})
export class AppComponent implements OnInit {

  ngOnInit() {
    
    const myObservable = Observable.create((producer) => {
      setTimeout(() => producer.next('Emision 1'), 1000);
      setTimeout(() => producer.next('Emision 2'), 2000);
      setTimeout(() => producer.next('Emision 3'), 3000);
    });

  }

}
