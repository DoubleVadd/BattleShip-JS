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
        this.hp = 17
        this.turn = false
    }

    changeTurn(){this.turn ? this.turn = false : this.turn = true}

    resetBoard(){
        this.board.resetGameBoard()
        this.enemyBoard = Array(100).fill(0)
        this.shipList = [new Ship(5),new Ship(4),new Ship(3),new Ship(3),new Ship(2)]
        this.hp = 17
        this.turn = false
    }


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

    chosenPlacement(ship, index, direction){
        if(this.board.validPlacement(ship, index, direction)){
            this.board.placeShip(ship, index, direction)
            console.log('placed')
        }
    }


    randomHitEasy(enemy){
        if(this.enemyBoard.indexOf(0)!==-1 && !enemy.board.checkAllSunk()){
            let currentHit = false
            while(!currentHit){
                let hitIndex = Math.floor(Math.random() * 100)
                if(this.enemyBoard[hitIndex]===0){
                    currentHit = true
                    this.enemyBoard[hitIndex] = enemy.board.receiveAttack(hitIndex) ? -1 : -2
                    if(this.enemyBoard[hitIndex] === -1){
                        enemy.hp = enemy.hp-1
                        return true
                    }
                }
            }   
        }
    }

    hitEnemy(coordinate, enemy){
        console.log('attacked', coordinate)
        if(this.enemyBoard.indexOf(0)!==-1 && !enemy.board.checkAllSunk()){
            let hitIndex = coordinate
            if(this.enemyBoard[hitIndex]===0){
                if(enemy.board.receiveAttack(hitIndex)){
                    this.enemyBoard[hitIndex] = -1
                    enemy.hp -=1
                    return[true, 'Hit']
                }else{
                    this.enemyBoard[hitIndex] = -2
                    return [true, 'Missed']
                }
                
            }
            
        }
        return [false, '--']

    }

}



export default Player