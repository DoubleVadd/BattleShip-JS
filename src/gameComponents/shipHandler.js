class Ship {

    constructor(length, hitCount=0, sunk=false){
        this.length = length
        this.hitCount = hitCount
        this.sunk = sunk
    }

    isHit(){++this.hitCount}

    isSunk(){
        this.length <= this.hitCount ? this.sunk=true : this.sunk=false
        return this.sunk
    }

}

export default Ship