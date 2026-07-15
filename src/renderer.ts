import { Board } from "./board.js";

const typeColors = [
  "#e8a0b0", 
  "#e8bd7a", 
  "#e8d478", 
  "#a3d9a3", 
  "#5c9b80", 
  "#9ea8d4", 
  "#78b0e0", 
  "#8fc0e8", 
  "#a888c2", 
  "#e896b8", 
  "#e8829e", 
  "#c0dba0", 
];

export function renderBoard(board: Board, ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = board.fillStyle;
    ctx.fillRect(0, 0, board.width * board.cellSize, board.height * board.cellSize);
        
    ctx.strokeStyle = board.strokeStyle;
    for (let x = 0; x <= board.width - 1; x++) {
        for (let y = 0; y <= board.height - 1; y++) {
            ctx.strokeRect(x * board.cellSize, y * board.cellSize, board.cellSize, board.cellSize);
            if (board.fields[x][y].type !== null) {
                ctx.fillStyle = typeColors[board.fields[x][y].type!];
                ctx.fillRect(x * board.cellSize + 1, y * board.cellSize + 1, board.cellSize - 2, board.cellSize - 2);

                if(board.fields[x][y].isQueen) {
                    ctx.fillStyle = board.strokeStyle;
                    ctx.font = "bold 30px Arial";
                    const textMetrics = ctx.measureText("👑");
                    ctx.fillText("👑", x * board.cellSize + (board.cellSize - textMetrics.width) / 2, y * board.cellSize + (board.cellSize + textMetrics.actualBoundingBoxAscent) / 2);
                }

                if (board.fields[x][y].isMarked) {
                    ctx.fillStyle = board.strokeStyle;
                    ctx.font = "bold 20px Arial";
                    const textMetrics = ctx.measureText("⨯");
                    ctx.fillText("⨯", x * board.cellSize + (board.cellSize - textMetrics.width) / 2, y * board.cellSize + (board.cellSize + textMetrics.actualBoundingBoxAscent) / 2);
                }
            }
        }
    }
}