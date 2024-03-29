import Ship from "../gameComponents/shipHandler";
import GameBoard from "../gameComponents/boardHandler";
import Player from "../gameComponents/playerHandler";

test('ship is hit, and not sunk', () =>{
    let ship = new Ship(3)
    ship.isHit()
    expect(ship.isSunk()).toBe(false)
}); 

test('ship is hit, and sunk', () =>{
    let ship = new Ship(3)
    ship.isHit()
    ship.isHit()
    ship.isHit()
    expect(ship.isSunk()).toBe(true)
}); 


test('gameboard size is correct 10x10', ()=>{
    let board = new GameBoard()
    expect(board.board.length).toBe(100)
})

test('Ship Placement Validator', ()=>{
    let board = new GameBoard()
    let shipShort = new Ship(2)
    let shipMedium = new Ship(3)
    let shipLong = new Ship(5)
    // Horizontal Placement
    expect(board.validPlacement(shipShort, 0, 'h')).toBe(true)
    expect(board.validPlacement(shipShort, 8, 'h')).toBe(true)
    expect(board.validPlacement(shipMedium, 8, 'h')).toBe(false)
    expect(board.validPlacement(shipLong, 94, 'h')).toBe(true)
    expect(board.validPlacement(shipLong, 96, 'h')).toBe(false)
    // Vertical Placement
    expect(board.validPlacement(shipLong, 96, 'v')).toBe(false)
    expect(board.validPlacement(shipLong, 55, 'v')).toBe(true)
    expect(board.validPlacement(shipLong, 65, 'v')).toBe(false)
})

test('Placing Ships',()=>{
    let board = new GameBoard()
    let shipShort = new Ship(2)
    let shipMedium = new Ship(3)
    let shipLong = new Ship(5)
    board.placeShip(shipShort, 0, 'h')
    board.placeShip(shipMedium, 90, 'h')
    board.placeShip(shipLong, 55, 'v')
    let gameState = board.board
    expect(gameState.slice(0,3)).toStrictEqual([1,1,0])
    expect(gameState.slice(90,93)).toStrictEqual([1,1,1])
    expect([gameState[55],gameState[65],gameState[75],gameState[85],gameState[95]]).toStrictEqual([1,1,1,1,1])
})

test('all ship validly Placed', ()=>{
    let player1 = new Player()
    player1.randomPlacement()
    let boardState = player1.board.board
    expect(boardState.reduce((a,b)=>{return a+b})).toBe(17)
})

test('check if all ship has sunk',()=>{
    let board = new GameBoard()
    expect(board.checkAllSunk()).toBe(true)
    board.board[55] = 1
    expect(board.checkAllSunk()).toBe(false)
})





