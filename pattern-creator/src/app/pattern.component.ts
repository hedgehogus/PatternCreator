import { Component } from '@angular/core';
import { PATTERN } from './mock-pattern';
import { Pattern } from './pattern';


@Component({
  selector: 'pattern-component',
  template: `<h1>Pattern</h1>
            <ul class="pattern">
                <li class="row" *ngFor = "let row of pattern.cells,let i=index">
                    <ul>
                        <li *ngFor = "let cell of row, let j=index" >   
                            <div (click)="change(cell,i,j )" class="cell" [class.default]="cell === 0" [class.selected]="cell === 1">  </div>           
                        </li>
                    </ul>
                </li>
            </ul>
            `  ,
    styleUrls: ['./pattern.component.css']
})

export class PatternComponent {
    pattern: Pattern;    

    getInitialPattern():void{        
        this.pattern = PATTERN;        
    }

    ngOnInit(): void {        
        this.getInitialPattern();
    }

    change(cell, i, j){ 
        //debugger;
            
        if (cell === 0){
            this.pattern.cells[i][j] = 1;
        } else if (cell === 1){
            this.pattern.cells[i][j] = 0;
        }        
        //console.log(cell, i,j);
        
    }
    
}