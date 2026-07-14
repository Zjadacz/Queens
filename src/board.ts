import { Queen } from "./queen.js";
export class Board{
    width: number;
    height: number;
    cellSize: number = 30;
    queens: Queen[] = [];

    constructor(width: number, height: number, cellSize: number) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#1e1e2e";
        ctx.fillRect(0, 0, this.width * this.cellSize, this.height * this.cellSize);
        
        ctx.strokeStyle = "#454545";
        for (let x = 0; x <= this.width - 1; x++) {
            for (let y = 0; y <= this.height - 1; y++) {
                ctx.strokeRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
            }
        }

        for (const queen of this.queens) {
            queen.draw(ctx, this.cellSize);
        }
    }
}
export default Board;