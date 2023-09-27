import { Player } from "../models/Player";
import { Position } from "../types/Position";
import {IPlayerCollectionService,IPlayerService} from "./IPlayerService";

const ListOfPlayers : Player[] = []



export class MockPlayerService implements IPlayerService {
    getPlayerDetails(playerID: number): Player {
       const queried = ListOfPlayers.find(player => player.playerId === playerID)
       if(queried === undefined) {
        throw new Error(`Player ${playerID} not found`)
       }
       return queried
    }
    setRoleForPlayer(playerID: number, position: Position) {
        const player =  this.getPlayerDetails(playerID)
        player.position = position

    }
    changePlayerName(playerID: number, newName: string) {
        const player =  this.getPlayerDetails(playerID)

        player.displayName = newName


    }


}
export class MockPlayerCollectionService implements IPlayerCollectionService {
    getPlayers(): Player[] {
        return ListOfPlayers;
    }
    addNewPlayer(player: Player): number {

        //Assign new length as id
        player.playerId = ListOfPlayers.push(player);
        return player.playerId;
    }

}