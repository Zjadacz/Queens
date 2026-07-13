"use strict";
// Punkt wejścia gry
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 30,
    speed: 4,
};
const keys = {};
window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));
function update() {
    if (keys["ArrowUp"] || keys["w"])
        player.y -= player.speed;
    if (keys["ArrowDown"] || keys["s"])
        player.y += player.speed;
    if (keys["ArrowLeft"] || keys["a"])
        player.x -= player.speed;
    if (keys["ArrowRight"] || keys["d"])
        player.x += player.speed;
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}
function draw() {
    ctx.fillStyle = "#1e1e2e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#89b4fa";
    ctx.fillRect(player.x, player.y, player.size, player.size);
}
function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}
loop();
//# sourceMappingURL=main.js.map