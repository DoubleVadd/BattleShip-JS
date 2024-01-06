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
        this.enemyBoard = new Array(100).fill(0)
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
    }

    randomHitEasy(enemy){
        if(this.enemyBoard.indexOf(0)!==-1 && !enemy.board.checkAllSunk()){
            let currentHit = false
            while(!currentHit){
                let hitIndex = Math.floor(Math.random() * 100)
                if(this.enemyBoard[hitIndex]===0){
                    currentHit = true
                    this.enemyBoard[hitIndex] = enemy.board.receiveAttack(hitIndex) ? -1 : -2
                }
            }   
        }
    }

}



export default Player