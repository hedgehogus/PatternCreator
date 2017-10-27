import { Component } from '@angular/core';
import { PatternComponent } from './pattern.component'

@Component({
  selector: 'app-root',
  template: `
   <h1>{{title}}</h1>    
   <pattern-component></pattern-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'root component';
}
