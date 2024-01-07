import Ship from "./gameComponents/shipHandler";
import GameBoard from "./gameComponents/boardHandler";
import Player from "./gameComponents/playerHandler" 
import display from "./gameComponents/displayer";
import './style.css'

const p1 = new Player()
const p2 = new Player()

const dom = display()
dom.initialRender()
p1.randomPlacement()
dom.generateUserBoard(p1)