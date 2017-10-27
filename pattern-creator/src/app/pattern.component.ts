import { Component } from '@angular/core';
import { PATTERN } from './mock-pattern';
import { Pattern } from './pattern';


@Component({
  selector: 'pattern-component',
  template: `<h1>Pattern</h1>
            <ul>
                <li *ngFor = "let row of cells">
                    <ul>
                        <li *ngFor = "let cell of row">
                            <p>{{cell}}<p>
                        </li>
                    </ul>
                </li>
            </ul>
            `  
})

export class PatternComponent {
    pattern: Pattern;
    cells: number[][];

    getInitialPattern():void{        
        this.pattern = PATTERN;
        this.cells = this.pattern.cells;
    }

    ngOnInit(): void {
        
        this.getInitialPattern();
    }
    
}