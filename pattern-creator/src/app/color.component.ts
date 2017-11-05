import { Component } from '@angular/core';
import { Color } from './color';
//import { NgStyle } from '@angular/common';


@Component({
  selector: 'color-component',
  templateUrl: './color.component.html' ,
  styleUrls: ['./color.component.css']
})

export class ColorComponent {
    backColor: Color;
    mainColor: Color;
    radio = {value:0};
    
    
    ngOnInit(): void {        
        this.backColor = {r:100,g:66,b:77};   
        this.mainColor = {r:250,g:66,b:77};     
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
        return '#' + color.r.toString(16) + color.g.toString(16) + color.b.toString(16);
    }

    changeBackground(): any {
        return { 'background-color': this.getCurrent() };
    }
}