import Ship from "../gameComponents/shipHandler";
import GameBoard from "../gameComponents/boardHandler";

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



