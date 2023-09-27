import { Request, Response, Router } from "express";
import { IPlayerCollectionService, IPlayerService } from "./services/IPlayerService";
import { MockPlayerCollectionService, MockPlayerService } from "./services/PlayerService";
import { Player } from "./models/Player";

const appRouter = Router();

//Configure Services
const playerCollection : IPlayerCollectionService = new MockPlayerCollectionService();
const playerService : IPlayerService = new MockPlayerService();

//Utils
const removeHyphen = (input : string)=> {
   
    return input.replace('-','');
}



//Player endpoints
appRouter.get('/players',(req:Request, res:Response) => {
    res.send(playerCollection.getPlayers());
})
appRouter.get('/players/:id',(req:Request, res:Response) => {
    res.send(playerService.getPlayerDetails(Number(req.params['id'])));
})

appRouter.post('/players',(req:Request, res:Response) => {
    const postData = req.body;
    
    postData.position = removeHyphen(postData.position);

    const player : Player = new Player(postData.displayName, postData.position, postData.profileImg)


    const id = playerCollection.addNewPlayer(player)
    res.send("player added " + id).status(200);

})


export default appRouter;