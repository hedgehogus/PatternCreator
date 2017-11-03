import { Component } from '@angular/core';
import { Color } from './color'


@Component({
  selector: 'color-component',
  template: `<h1>color component</h1>  
            <div class="displayColor"> </div>
            <p>{{getCurrent()}}</p>
            <div class="picker">       
                <input type="range" name="r" min="0" max ="254">
                <input type="range" name="g" min="0" max ="254">
                <input type="range" name="b" min="0" max ="254">
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
}