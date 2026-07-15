import { Position } from "./position.js";
import { Field } from "./field.js";
export class Board{
    width: number;
    height: number;
    cellSize: number = 30;
    fields: Field[][] = [];
    strokeStyle: string;
    fillStyle: string;

    constructor(width: number, height: number, cellSize: number, strokeStyle: string, fillStyle: string = "#aaaaaa") {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.strokeStyle = strokeStyle;
        this.fillStyle = fillStyle;

        this.fields = new Array(width);
        for (let x = 0; x < width; x++) {
            this.fields[x] = new Array(height);
            for (let y = 0; y < height; y++) {
                this.fields[x][y] = new Field({ x, y });
            }
        }
    }   

    markField(position: Position, override: boolean | null = null): void {
        const { x, y } = position;
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.fields[x][y].isMarked = override != null ? override : !this.fields[x][y].isMarked;
            this.fields[x][y].isQueen = false;
        }
    }

    markQueen(position: Position): void {
        const { x, y } = position;
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.fields[x][y].isQueen = !this.fields[x][y].isQueen;
            this.fields[x][y].isMarked = false;
        }

        this.markFieldsSetByQueen(position);
    }

    private markFieldsSetByQueen(position: Position): void {
        const { x, y } = position;

        for(let i = 0; i < this.width; i++) {
            for(let j = 0; j < this.height; j++) {
                if(!this.fields[i][j].isQueen && this.fields[i][j].type == this.fields[x][y].type) {
                    this.fields[i][j].isMarked = true;
                }
            }
        }

        for (let i = 0; i < this.width; i++) {
            if(i !== x) {
                this.fields[i][y].isMarked = true;
            }
        }

        for (let j = 0; j < this.height; j++) {
            if(j !== y) {
                this.fields[x][j].isMarked = true;
            }
        }

        if(x > 0 && y > 0) {
            this.fields[x - 1][y - 1].isMarked = true;
        }

        if(x < this.width - 1 && y < this.height - 1) {
            this.fields[x + 1][y + 1].isMarked = true;
        }

        if(x > 0 && y < this.height - 1) {
            this.fields[x - 1][y + 1].isMarked = true;
        }

        if(x < this.width - 1 && y > 0) {
            this.fields[x + 1][y - 1].isMarked = true;
        }
    }
}
