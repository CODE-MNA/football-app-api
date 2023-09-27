import { Position } from "../types/Position";

export type PlayerID = number;

export class Player{
    playerId : PlayerID = 0;
    displayName: string = "";
    position: Position = Position.Goalkeeper;
    
    constructor(displayName : string, positionString : string, image: string){
        this.position = Position[positionString as keyof typeof Position];
        this.displayName = displayName;
        
        console.log(positionString)
    }


}