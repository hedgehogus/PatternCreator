import { Component } from '@angular/core';
import { PATTERN } from './mock-pattern';
import { Pattern } from './pattern';


@Component({
  selector: 'pattern-component',
  template: `<h1>Pattern</h1>
            <div class="size">
                <div class="height">
                    <button (click)="decrease(pattern, 'height')">-</button>
                    <p>{{pattern.height}}</p>
                    <button (click)="increase(pattern, 'height')">+</button>
                </div>
            </div>
            <ul class="pattern" (mouseup)="mUp()"  (mouseleave)="mUp()" >
                <li class="row" *ngFor = "let row of pattern.cells">
                    <ul>
                        <li *ngFor = "let cell of row" >   
                            <div   
                                (mousedown)="mDown($event, cell, i, j)"                                                            
                                (mousemove)="change(cell , $event)" 
                                class="cell" 
                                [class.default]="cell.color === 0" 
                                [class.selected]="cell.color === 1">  </div>           
                        </li>
                    </ul>
                </li>
            </ul>
            `  ,
    styleUrls: ['./pattern.component.css']
})

export class PatternComponent {
    pattern: Pattern;
    cellColor:number;
    mouseState = false;
    lastChangedCell = undefined;

    getInitialPattern():void{        
        this.pattern = PATTERN;
        console.log(this.pattern);        
    }

    ngOnInit(): void {        
        this.getInitialPattern();
    }

    change(cell , event){
        if (this.mouseState ){        
            if (!(cell === this.lastChangedCell)){
                cell = this.cellColor;                
                this.lastChangedCell = cell;  
            }
        }
    }

    mDown(event, cell){
        event.preventDefault();
        this.mouseState = true;
        if (cell === 0){
            this.cellColor = 1;
        } else if (cell === 1){
            this.cellColor = 0;
        };    
        this.change(cell, event);        
    };

    mUp(){
        this.mouseState = false;        
        this.lastChangedCell = undefined;
        //console.log("up");
    };

    increase(pattern, param){
        if (pattern.height < pattern.maxSize){
            pattern.height++;
        }        
    }

    decrease(pattern,param){
        if (pattern.height > pattern.minSize){
            pattern.height--;
        }
    }
    
}