import { Component, Input } from '@angular/core';
import { Color } from './color';
//import { NgStyle } from '@angular/common';


@Component({
  selector: 'color-component',
  templateUrl: './color.component.html' ,
  styleUrls: ['./color.component.css']
})

export class ColorComponent {
    @Input() backColor:Color;
    @Input() mainColor:Color;
    radio = {value:1};
        
    ngOnInit(): void {     
    }

    getCurrent(){
        let color;
        switch (this.radio.value){
            case 0:
                color = this.backColor;
                break;
            case 1:
                color = this.mainColor;
        }        
        return convertColor(color);
    }

    changeBackground(): any {
        return { 'background-color': this.getCurrent() };
    }
}

export function convertColor (color: Color){
    return '#' + color.r.toString(16) + color.g.toString(16) + color.b.toString(16);
}