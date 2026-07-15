import { Position } from "./position";
export class Field {
    position: Position;
    isQueen: boolean = false;
    isMarked: boolean = false;
    type: number | null = null;

    constructor(position: Position) {
        this.position = position;
    }
}
