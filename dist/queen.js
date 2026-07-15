export class Queen {
    constructor(fields, color) {
        this.fields = fields;
        this.color = color;
    }
    draw(ctx, cellSize) {
        ctx.fillStyle = this.color;
        for (const field of this.fields) {
            ctx.fillRect(field.position.x * cellSize + 1, field.position.y * cellSize + 1, cellSize - 2, cellSize - 2);
        }
    }
}
//# sourceMappingURL=queen.js.map