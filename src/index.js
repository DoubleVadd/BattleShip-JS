import Ship from "./gameComponents/shipHandler";
import GameBoard from "./gameComponents/boardHandler";
import Player from "./gameComponents/playerHandler" 

let a = new GameBoard()
a.printBoard()



let shipA = new Ship(5)
let shipB = new Ship(3)

a.placeShip(shipA, 1, 'h')
a.placeShip(shipB, 55, 'v')

a.printBoard()

a.receiveAttack(11)
a.receiveAttack(55)
a.receiveAttack(70)
a.receiveAttack(10)
a.receiveAttack(5)

a.printBoard()

let b = new Player()
b.randomPlacement()
