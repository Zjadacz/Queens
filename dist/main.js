import { renderBoard } from "./renderer.js";
import { BoardFactory } from "./board_factory.js";
// Punkt wejścia gry
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const board = new BoardFactory().create10x10Board();
var wasMove = false;
canvas.addEventListener("mouseup", (e) => {
    if (wasMove) {
        wasMove = false;
        return;
    }
    const rect = canvas.getBoundingClientRect();
    const position = { x: Math.floor(e.clientX - rect.left), y: Math.floor(e.clientY - rect.top) };
    const tilePosition = getTilePosition(board, position);
    if (e.button === 0) {
        board.markField(tilePosition);
    }
    else if (e.button === 2) {
        board.markQueen(tilePosition);
    }
});
canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const position = { x: Math.floor(e.clientX - rect.left), y: Math.floor(e.clientY - rect.top) };
    const tilePosition = getTilePosition(board, position);
    if (e.buttons & 1) {
        board.markField(tilePosition, true);
        wasMove = true;
    }
});
function update() {
}
function loop() {
    update();
    renderBoard(board, ctx);
    requestAnimationFrame(loop);
}
function getTilePosition(board, mousePosition) {
    const x = Math.floor(mousePosition.x / board.cellSize);
    const y = Math.floor(mousePosition.y / board.cellSize);
    return { x, y };
}
loop();
//# sourceMappingURL=main.js.map