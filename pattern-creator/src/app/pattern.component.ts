import { Component, Input } from '@angular/core';
import { PATTERN } from './mock-pattern';
import { Pattern } from './pattern';

import { Color } from './color';
import { convertColor } from "./color.component"

@Component({
  selector: 'pattern-component',
  templateUrl: './pattern.component.html' ,
  styleUrls: ['./pattern.component.css']
})

export class PatternComponent {
    pattern: Pattern;
    cellColor:number;
    @Input() backColor:Color;
    @Input() mainColor:Color;
    mouseState = false;
    lastChangedCell = undefined;
    convertColor;

    getInitialPattern():void{        
        this.pattern = PATTERN;
        this.initCells();
        this.convertColor = convertColor;    
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
        resizePattern(pattern);  
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
        resizePattern(pattern);
    }

    getStyle(mainOrBack){
        if (mainOrBack === 1) {
            return this.getMainColor();
        } else if (mainOrBack === 0){
            return this.getBackColor()
        }
    }

    getMainColor(): any {
        return { 'background-color': this.convertColor(this.mainColor) };
    }

    getBackColor(): any {
        return { 'background-color': this.convertColor(this.backColor) };
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

function resizePattern(pattern){
    if(pattern.height > pattern.cells.length){
        for(let i = pattern.cells.length; i < pattern.height; i++){
            let row = [];
            for(let j = 0; j < pattern.cells[0].length; j++){
                row.push({color:0});
            }
            pattern.cells.push(row);
        }
    } else  if (pattern.height < pattern.cells.length){
        for(let i = pattern.cells.length; i > pattern.height; i--){
            pattern.cells.pop();
        }
    }
    if (pattern.width > pattern.cells[0].length){
        for( let i = 0; i < pattern.cells.length; i ++) {
            for(let j = pattern.cells[i].length; j < pattern.width; j ++){
                pattern.cells[i].push({color:0});
            }
        }
    } else if (pattern.width < pattern.cells[0].length) {
        for( let i = 0; i < pattern.cells.length; i ++) {
            for(let j = pattern.cells[i].length; j > pattern.width; j --){
                pattern.cells[i].pop();
            }
        }
    }

}

