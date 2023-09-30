import { Position } from "../types/Position";

export type PlayerID = number;

export class Player{
    playerId : PlayerID = 0;
    displayName: string = "";
    position: Position = Position.Goalkeeper;
    imagePath: string = "";

    constructor(displayName : string, positionString : string, image: any){
        this.position = Position[positionString as keyof typeof Position];
        this.displayName = displayName;
        this.imagePath = image

    }


}