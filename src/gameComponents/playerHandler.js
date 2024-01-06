import GameBoard from "./boardHandler";
import Ship from "./shipHandler";


class Player{
    static #play = 0
    static #updatePlayerCount (){
        Player.#play+=1}

    constructor(){
        this.player = Player.#play
        Player.#updatePlayerCount()
        this.board = new GameBoard()
        this.shipList = [new Ship(5),new Ship(4),new Ship(3),new Ship(3),new Ship(2)]
        this.score=0
        this.turn = false
    }

    changeTurn(){this.turn ? this.turn = false : this.turn = true}


    randomPlacement(){
        for(let ship of this.shipList){
            let placed = false
            while(!placed){
                let placement_index = Math.floor(Math.random() * 100)
                let placement_direction = Math.floor(Math.random() * 2) ? 'h' : 'v'
                if(this.board.validPlacement(ship, placement_index, placement_direction)){
                    this.board.placeShip(ship, placement_index, placement_direction)
                    placed = true
                }
                
            }
        }
        console.log('all ships have been placed')
        this.board.printBoard()
    }


}



export default Player