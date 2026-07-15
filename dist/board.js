import { Field } from "./field.js";
export class Board {
    constructor(width, height, cellSize, strokeStyle, fillStyle = "#aaaaaa") {
        this.cellSize = 30;
        this.fields = [];
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
    markField(position, override = null) {
        const { x, y } = position;
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.fields[x][y].isMarked = override != null ? override : !this.fields[x][y].isMarked;
            this.fields[x][y].isQueen = false;
        }
    }
    markQueen(position) {
        const { x, y } = position;
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.fields[x][y].isQueen = !this.fields[x][y].isQueen;
            this.fields[x][y].isMarked = false;
        }
        this.markFieldsSetByQueen(position);
    }
    markFieldsSetByQueen(position) {
        const { x, y } = position;
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if (!this.fields[i][j].isQueen && this.fields[i][j].type == this.fields[x][y].type) {
                    this.fields[i][j].isMarked = true;
                }
            }
        }
        for (let i = 0; i < this.width; i++) {
            if (i !== x) {
                this.fields[i][y].isMarked = true;
            }
        }
        for (let j = 0; j < this.height; j++) {
            if (j !== y) {
                this.fields[x][j].isMarked = true;
            }
        }
        if (x > 0 && y > 0) {
            this.fields[x - 1][y - 1].isMarked = true;
        }
        if (x < this.width - 1 && y < this.height - 1) {
            this.fields[x + 1][y + 1].isMarked = true;
        }
        if (x > 0 && y < this.height - 1) {
            this.fields[x - 1][y + 1].isMarked = true;
        }
        if (x < this.width - 1 && y > 0) {
            this.fields[x + 1][y - 1].isMarked = true;
        }
    }
}
//# sourceMappingURL=board.js.map