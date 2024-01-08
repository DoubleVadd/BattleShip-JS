import Ship from "./gameComponents/shipHandler";
import GameBoard from "./gameComponents/boardHandler";
import Player from "./gameComponents/playerHandler" 
import display from "./gameComponents/displayer";
import './style.css'

let p1 = new Player()
let p2 = new Player()
let dom = display()
dom.initialRender()

const playAgain = document.querySelector('#play-again')

playAgain.addEventListener('click', e => {
    dom.resetScore()
    const overOverlay = document.querySelector('#gameOver')
    p1.resetBoard();
    p2.resetBoard();
    p2.randomPlacement()

    dom.generateUserBoard(p1)
    dom.generateEnemyBoard(p1)
    
    dom.statusUpdate()

    overOverlay.classList.toggle('hidden')
    const placementOverlay = document.querySelector('#gameSetup')
    placementOverlay.classList.toggle('hidden')
    dom.enemyBoardEvent(p1, p2)
    dom.placementRender(p1, p1.shipList, 4)
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', e =>{
    window.location.reload()
})



// dom.placementRender(p1, p1.shipList, 4)




