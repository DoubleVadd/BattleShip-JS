
class GameBoard{
    constructor(){
        this.board = new Array(100).fill(0)
    }

    resetGameBoard(){
        this.board = Array(100).fill(0)
    }


    validPlacement(ship, index, direction){
        let placement = false
        if(direction === 'h'){
            placement = index%10+ship.length<=10 ? true : false
            if(placement){
                for(let i=0; i<ship.length; i++){
                    if(this.board[index+i] !== 0){
                        placement = false
                        break
                    }
                }
            }
        }else if(direction === 'v'){
            placement = index +10*ship.length-10<100 ? true : false
            if(placement){
                for(let i=0; i<ship.length; i++){
                    if(this.board[index+i*10] !== 0){
                        placement = false
                        break
                    }
                }
            }
        }
        return placement
    }

    // can place anywhere but should require validPlacement before used
    placeShip(ship, index, direction){
        if(direction === 'h'){
            for(let i=0; i<ship.length; i++){
                this.board[index+i] = 1
            }
        }else if(direction === 'v'){
            for(let i=0; i<ship.length; i++){
                this.board[index+i*10] = 1
            }
        }

    }

    receiveAttack(index){
        if(this.board.indexOf(0)!==-1){
            if(this.board[index]===1){
                this.board[index]=-1
                console.log("Hit")
                return true
            }else if(this.board[index]===0){
                this.board[index]=-2
                console.log("Missed")
                return false
            }
        }return false
    }

    checkAllSunk(){
        if(this.board.indexOf(1) === -1){
            console.log('All ship has sunk')
            return true
        }else{
            console.log('there are still ships hiding')
            return false
        }
    }


    printBoard(){
        let prev = 0
        let text = ``
        for(let i =1; i<11; i++){
            text += this.board.slice(prev, i*10).join(" ") +'\n'
            prev +=10
        }
        console.log(text)
    }
}




export default GameBoard