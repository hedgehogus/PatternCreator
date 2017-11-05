import { Component } from '@angular/core';
import { Color } from './color';
//import { NgStyle } from '@angular/common';


@Component({
  selector: 'color-component',
  template: `<h1>color component</h1> 
            <div class="main-back">
            <div class="radio">
                <input type="radio" id="main" name="mainorback" [value]="0" [(ngModel)]="radio.value">  
                <label for="main">main color<label>              
                <input type="radio" id="back" name="mainorback" [value]="1" [(ngModel)]="radio.value">
                <label for="back">background color<label>                
            <div> 
            <div class="displayColor" [ngStyle]="changeBackground()" > </div>            
            <div class="mainpicker" *ngIf="radio.value === 0">                  
                <input type="range" name="r" min="0" max ="254"
                    [(ngModel)]="backColor.r">
                <input type="range" name="g" min="0" max ="254"
                    [(ngModel)]="backColor.g">
                <input type="range" name="b" min="0" max ="254"
                    [(ngModel)]="backColor.b">
            </div>
            <div class="backpicker" *ngIf="radio.value === 1">       
                <input type="range" name="r" min="0" max ="254"
                    [(ngModel)]="mainColor.r">
                <input type="range" name="g" min="0" max ="254"
                    [(ngModel)]="mainColor.g">
                <input type="range" name="b" min="0" max ="254"
                    [(ngModel)]="mainColor.b">
            </div>` 
            ,
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