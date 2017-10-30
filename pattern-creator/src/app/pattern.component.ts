import { Component } from '@angular/core';
import { PATTERN } from './mock-pattern';
import { Pattern } from './pattern';


@Component({
  selector: 'pattern-component',
  template: `<h1>Pattern</h1>
            <div class="size">
                <div class="height">
                    <button (click)="decrease(pattern.height)">-</button>
                    <p>{{pattern.height}}</p>
                    <button (click)="increase(pattern.height)">+</button>
                </div>
            </div>
            <ul class="pattern" (mouseup)="mUp()"  (mouseleave)="mUp()" >
                <li class="row" *ngFor = "let row of pattern.cells,let i=index">
                    <ul>
                        <li *ngFor = "let cell of row, let j=index" >   
                            <div   
                                (mousedown)="mDown($event, cell, i, j)"                                                            
                                (mousemove)="change(i,j , $event)" 
                                class="cell" 
                                [class.default]="cell === 0" 
                                [class.selected]="cell === 1">  </div>           
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
    lastChangedIndex = {i:-1,
                        j:-1};

    getInitialPattern():void{        
        this.pattern = PATTERN;        
    }

    ngOnInit(): void {        
        this.getInitialPattern();
    }

    change(i, j , event){
        if (this.mouseState ){        
            if (!(i === this.lastChangedIndex.i && j === this.lastChangedIndex.j)){
                this.pattern.cells[i][j] = this.cellColor;                
                this.lastChangedIndex = {i,j};  
            }
        }
    }

    mDown(e, cell, i, j){
        e.preventDefault();
        this.mouseState = true;
        if (cell === 0){
            this.cellColor = 1;
        } else if (cell === 1){
            this.cellColor = 0;
        };    
        this.change(i,j,e);
        console.log("down");
    };

    mUp(){
        this.mouseState = false;        
        this.lastChangedIndex = {i:-1,j:-1};
        console.log("up");
    };

    increase(param){
        if (param < this.pattern.maxSize){
            param++;
        }
    }

    decrease(param){
        if (param > this.pattern.minSize){
            param--;
        }
        console.log(param);
    }
    
}