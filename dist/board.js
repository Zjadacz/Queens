export class Board {
    constructor(width, height, cellSize) {
        this.cellSize = 30;
        this.queens = [];
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
    }
    draw(ctx) {
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
//# sourceMappingURL=board.js.map