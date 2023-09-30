import { Request, Response, Router } from "express";
import { IPlayerCollectionService, IPlayerService } from "./services/IPlayerService";
import { MockPlayerCollectionService, MockPlayerService } from "./services/PlayerService";
import { Player } from "./models/Player";
import upload from "./middlewares/upload";

 export const appRouter = Router();

//Configure Services
const playerCollection : IPlayerCollectionService = new MockPlayerCollectionService();
const playerService : IPlayerService = new MockPlayerService();

//Utils
const removeHyphen = (input : string)=> {
   
    return input.replace('-','');
}


//Extra Routes
if(process.env.NODE_ENV !== 'production'){
    appRouter.get('/exit',(req, res)=>{
        res.status(501).send({message:"Exiting Server!"});
        process.exit(1)
    })
    appRouter.get('/pid',(req, res)=>{
        res.status(200).send({
            report:process.report,
            id:process.pid,
            os:process.platform,
            name:process.title,
           env:process.env
    
        })
    })
}


//Player endpoints
appRouter.get('/players',(req:Request, res:Response) => {
    res.send(playerCollection.getPlayers());
})
appRouter.get('/players/:id',(req:Request, res:Response) => {
    res.send(playerService.getPlayerDetails(Number(req.params['id'])));
})

appRouter.post('/players',upload.single('profileImg') , (req:Request, res:Response) => {
    const postData = req.body;

    if(postData.position === undefined){
        return res.status(400).send({ message: "Position Data not there"})
    }
    postData.position = removeHyphen(postData.position);

    const imgPath = req.file?.path
    if(imgPath === undefined){
      return  res.status(400).send({ message: "Image Data not there"})
        
    }
    const player : Player = new Player(postData.displayName, postData.position, imgPath  )


    const id = playerCollection.addNewPlayer(player)
    res.send({
        message:"Added new player with id: " + id
    }).status(200);

})

