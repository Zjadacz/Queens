import { Position }  from "./position.js";
export class Queen{
    location: Position;
    area: Position[];
    color: string;

    constructor(location: Position, area: Position[], color: string) {
        this.location = location;
        this.area = area;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D, cellSize: number): void {
        ctx.fillStyle = this.color;
        for (const pos of this.area) {
            ctx.fillRect(pos.x * cellSize + 1, pos.y * cellSize + 1, cellSize - 2, cellSize - 2);
        }
    }
}