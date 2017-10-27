import { Component } from '@angular/core';

@Component({
  selector: 'pattern-component',
  template: `<h1>Pattern{{a}}</h1>`  
})

export class PatternComponent {
  a = 3;
}