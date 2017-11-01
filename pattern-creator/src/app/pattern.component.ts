import { Component } from '@angular/core';
import { PATTERN } from './mock-pattern';
import { Pattern } from './pattern';


@Component({
  selector: 'pattern-component',
  template: `<h1>Pattern</h1>
            <div class="size">
                <div class="height">
                    <label> Height </label> 
                    <button (click)="decrease(pattern, 'height')">-</button>
                    <p>{{pattern.height}}</p>
                    <button (click)="increase(pattern, 'height')">+</button>
                </div>
                <div class="width">
                    <label> Width </label> 
                    <button (click)="decrease(pattern, 'width')">-</button>
                    <p>{{pattern.width}}</p>
                    <button (click)="increase(pattern, 'width')">+</button>
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
        this.initCells();    
    }

    initCells(){
        let arr = new Array;        
        for (let i = 0, height = this.pattern.height; i < height; i++){
            let row = [];
            for (let j = 0, width = this.pattern.width; j < width; j ++){
                row.push({color:0});                
            }
            arr.push(row);
        }    
        this.pattern.cells = arr;    
    }

    ngOnInit(): void {        
        this.getInitialPattern();
    }

    change(cell , event){        
        if (this.mouseState ){        
            if (!(cell === this.lastChangedCell)){
                cell.color = this.cellColor;                
                this.lastChangedCell = cell;  
            }
        }
    }

    mDown(event, cell){
        event.preventDefault();
        this.mouseState = true;
        if (cell.color === 0){
            this.cellColor = 1;
        } else if (cell.color === 1){
            this.cellColor = 0;
        };    
        this.change(cell, event);        
    };

    mUp(){
        this.mouseState = false;        
        this.lastChangedCell = undefined;        
    };

    increase(pattern, param){
        if (param === "height"){
            if (pattern.height < pattern.maxSize){
                pattern.height++;
            }   
        } else if (param === "width"){
             if (pattern.width < pattern.maxSize){
                pattern.width++;
            }  
        }     
    }

    decrease(pattern,param){
        if (param === "height"){
            if (pattern.height > pattern.minSize){
                pattern.height--;
            }
        } else if (param === "width"){
             if (pattern.width > pattern.minSize){
                pattern.width--;
            }  
        }  
    }
    
}

function initCells(width, height){
    let arr = new Array;

    for (let i = 0; i < height; i++){
        let row = [];
        for (let j = 0; j < width; j ++){
            row.push({color:0});
            console.log(row);
        }
        arr.push(row);
    }
    console.log(arr);
    return arr;
}