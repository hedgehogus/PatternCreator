import { Pattern } from './pattern';
import { Cell } from './pattern'

export const PATTERN : Pattern = {
    cells: initCells(this.width, this.height),
    height: 5,
    width: 5,
    minSize: 2,
    maxSize: 10,
}

function initCells(width, height){
    let arr = new Array;

    for (let i = 0; i< height; i++){
        let row = new Array;
        for (let j = 0; j < width; j ++){
            row.push({color:0});
            console.log(row);
        }
        arr.push(row);
    }
    console.log(arr);
    return arr;
}