import { Component } from '@angular/core';
import { Color } from './color';
//import { NgStyle } from '@angular/common';


@Component({
  selector: 'color-component',
  template: `<h1>color component</h1>  
            <div class="displayColor" [ngStyle]="changeBackground()" > </div>            
            <div class="picker">       
                <input type="range" name="r" min="0" max ="254"
                    [(ngModel)]="color.r">
                <input type="range" name="g" min="0" max ="254"
                    [(ngModel)]="color.g">
                <input type="range" name="b" min="0" max ="254"
                    [(ngModel)]="color.b">
            </div>` 
            ,
  styleUrls: ['./color.component.css']
})

export class ColorComponent {
    color: Color;
    
    ngOnInit(): void {        
        this.color = {r:100,g:66,b:77};
    }

    getCurrent(){
        return '#' + this.color.r.toString(16) + this.color.g.toString(16) + this.color.b.toString(16);
    }

    changeBackground(): any {
        return { 'background-color': this.getCurrent() };
}
}