import { Player, PlayerID } from "../models/Player";
import { Position } from "../types/Position";

export interface IPlayerCollectionService{
    getPlayers() : Player[]
    addNewPlayer(player: Player) : PlayerID
}

export interface IPlayerService{
    getPlayerDetails(playerID : PlayerID) : Player
    setRoleForPlayer(playerID : PlayerID, position : Position) : void
    changePlayerName(playerID : PlayerID, newName : string) : void}