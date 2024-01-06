const display = () =>{


    const gridCreator = (player) =>{
        let div = ``
        for(let i =0; i<100; i++){
            div += `<div id='${player}${i}'></div>`
        }
        return div
    }

    const initialRender =()=>{
        const main = document.querySelector('main')
        main.innerHTML = `
        <header><h1>BATTLESHIP</h1></header>
        <article class="gameContainer">

            <section class="player-container player-left">
                <h1>You</h1>
                <div class="board-container left" id="left-board">
                    ${gridCreator('a')}
                </div>
                <div class="ship-container">
                    <div class="ship-title"><h2>Your Ships</h2></div>
                    <hr>
                    <div class="ship-list">
                        <div id="ship1" class="ship">##</div>
                        <div id="ship2" class="ship">###</div>
                        <div id="ship3" class="ship">###</div>
                        <div id="ship4" class="ship">####</div>
                        <div id="ship5" class="ship">#####</div>
                    </div>
                </div>
            </section>

            <section class="game-status middle">
                <ul class="currrent-status">
                    <li class="status-container" id="turn">
                        <h2>Turn</h2>
                        <h1>--</h1>
                    </li>
                    <li class="status-container" id="turn">
                        <h2>Turn</h2>
                        <h1>--</h1>
                    </li>
                    <li class="status-container" id="attack-p1">
                        <h2>Last Attack: You</h2>
                        <h1>--</h1>
                    </li>
                    <li class="status-container" id="attack-p1">
                        <h2>Last Attack: Enemy</h2>
                        <h1>--</h1>
                    </li>
                    <li class="status-container" id="Battle-Status">
                        <h2>Battle Status</h2>
                        <h1>stop</h1>
                    </li>
                </ul>
                <button id="reset">Reset</button>
            </section>

            <section class="player-container player-right">
                <h1>Enemy</h1>
                <div class="board-container right" id="right-board">
                    ${gridCreator('b')}
                </div>
                <div class="global-status">
                    <div>
                        <h2>status:</h2>
                    </div>
                    <hr>
                    <div class="global-status-grid">
                        <h3 id="game-count">Number of Games: 0</h3>
                        <h3 id="sunk-count">Number of Ships Sunk: 0</h3>
                        <h3 id="win-count">Number of Games Won: 0</h3>
                        <h3 id="shot-count">Number of Shots Taken: 0</h3>
                    </div>

                </div>
            </section>
            </section>
        </article>
        <footer><h1></h1></footer>    
        `
    }


 return {initialRender}
}

export default display