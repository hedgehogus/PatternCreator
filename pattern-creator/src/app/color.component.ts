import { Component } from '@angular/core';


@Component({
  selector: 'color-component',
  template: `<h1>color component</h1>  
            <div class="displayColor"> </div>
            <div class="picker">       
                <input type="range" name="r" min="0" max ="254">
                <input type="range" name="g" min="0" max ="254">
                <input type="range" name="b" min="0" max ="254">
            </div>` 
            ,
  styleUrls: ['./color.component.css']
})

export class ColorComponent {
}