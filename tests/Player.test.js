const Player = require('../src/models/Player').Player
//import {Player} from '../src/models/Player'
describe('Player',()=>{
    it('should have a display name',()=>{

        const player = new Player();

       const expectedName = '';
       expect(player.displayName).toBe(expectedName);
    })
})