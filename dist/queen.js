export class Queen {
    constructor(location, area, color) {
        this.location = location;
        this.area = area;
        this.color = color;
    }
    draw(ctx, cellSize) {
        ctx.fillStyle = this.color;
        for (const pos of this.area) {
            ctx.fillRect(pos.x * cellSize + 1, pos.y * cellSize + 1, cellSize - 2, cellSize - 2);
        }
    }
}
//# sourceMappingURL=queen.js.map