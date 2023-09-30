import { Server } from 'http';
import path from 'path';
import {rimraf, rimrafSync, windowsSync} from 'rimraf';


//Function that deletes files
const deleteUploadedFiles =  function() {
   
   
    let uploadPath = path.resolve('uploaded')
    
    try{
      

        console.log('Trying to delete files from ' + uploadPath)
        let p = uploadPath.replace('\\','/')
        rimrafSync(`${p}/`, {preserveRoot:false , maxRetries:3, backoff:3000})
        

    }catch(e){
    console.error(e )

    }
   

  };


//Actual function that is fired at the end
const CleanUp = () => {

    if(process.env.DELETE_UPLOADS !== undefined){
        deleteUploadedFiles();
    }
    

};
export const RegisterShutdowns = (httpServer: Server, nodeProcess: NodeJS.Process)=>{
  
function FireExitProcess(): ((err?: Error | undefined) => void) | undefined {
    return () => {
        httpServer.close(()=>{
            console.log("Closing");
            process.exit(0);

        });


    };
}


  
    // The SIGINT signal is sent to a process by its controlling terminal when a user wishes to interrupt the process.
  nodeProcess.once('SIGINT', ()=>{
    
  FireExitProcess()
    

});

// The SIGTERM signal is sent to a process to( request its termination.
nodeProcess.once('SIGTERM', ()=>{
   
    FireExitProcess()

});
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
   FireExitProcess()
});
nodeProcess.once('exit',CleanUp)
}
