class GameBoard{
    constructor(){
        this.board = new Array(100).fill(0)
    }


    validPlacement(ship, index, direction){
        let placement = false
        if(direction === 'h'){
            placement = index%10+ship.length<=10 ? true : false
            if(placement){
                for(let i=0; i<ship.length+1; i++){
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

    placeShip(ship){

    }





}




export default GameBoard