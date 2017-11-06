import { Component } from '@angular/core';
import { PatternComponent } from './pattern.component'

@Component({
  selector: 'app-root',
  template: `   
   <pattern-component></pattern-component>   
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'root component';
}
