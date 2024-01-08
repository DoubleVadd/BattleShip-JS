const display = () =>{

    let turn = 0
    let remaining = 17
    let lastAttack1 = '--'
    let lastAttack2 = '--'
    let battleStatus = 'attack'
    let totalTurns = 0
    let totalGames = 0
    let totalHits = 0
    let totalShots = 0
    let totalWin = 0

    let placementCount = 1

    const resetScore = () => {
        turn = 0
        remaining = 17
        lastAttack1 = '--'
        lastAttack2 = '--'
        battleStatus = 'attack'
    }

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
                        <h1>${turn}</h1>
                    </li>
                    <li class="status-container" id="remaining">
                        <h2>remaining</h2>
                        <h1>${remaining}</h1>
                    </li>
                    <li class="status-container" id="attack-p1">
                        <h2>Last Attack: You</h2>
                        <h1>${lastAttack1}</h1>
                    </li>
                    <li class="status-container" id="attack-p2">
                        <h2>Last Attack: Enemy</h2>
                        <h1>${lastAttack2}</h1>
                    </li>
                    <li class="status-container" id="Battle-Status">
                        <h2>Battle Status</h2>
                        <h1>${battleStatus}</h1>
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
                        <h3 id="game-count">Number of Games: ${totalGames}</h3>
                        <h3 id="sunk-count">Number of Times Hit: ${totalHits}</h3>
                        <h3 id="win-count">Number of Games Won: ${totalWin}</h3>
                        <h3 id="shot-count">Number of Shots Fired: ${totalShots}</h3>
                    </div>

                </div>
            </section>
            </section>
        </article>
        <footer><h1></h1></footer>    
        `
    }


    const placementOverlayRender = (placementCount, ship)=>{
        if(ship){
            const placementOverlay = document.querySelector('#gameSetup .top')
            placementOverlay.innerHTML = `
                <h1>Please Organize Your Ships: ${placementCount++}/5</h1>
                <h2>To place the Current Ship, Hover Over the Grid and Left Click.</h2>
                <h2>Game Will Start Automatically Once All Ships are Placed.</h2>
                <br>
                <hr>
                <h2>You Are Currently Placing:</h2>
                <h1 class="ship">${'#'.repeat(ship.length)}</h1>
            `
        }
    }

    const placementRender = (player, shipList, shipCount)=>{
        let ship = shipList[shipCount]
        let shipPlaced = 1
        const playerBoard = document.querySelector('#left-board')
        generateUserBoard(player)
        
        if(shipCount >= 0){
            const rotate = document.querySelector('#rotate')
            let rotation = 'h'
            rotate.addEventListener('click', e=>{
                e.stopPropagation
                rotation = rotation === 'h' ? 'v' : 'h'
                const currentShip = document.querySelector('#gameSetup .ship')
                // currentShip.innerHTML = rotation ==='h' ? `${'#'.repeat(ship.length)}` : `${'#<br>'.repeat(ship.length)}`
                currentShip.innerHTML = `${'#'.repeat(ship.length)}`
            })

            const randomPlacement = document.querySelector('#random-placement')
            randomPlacement.addEventListener('click', e=>{
                player.resetBoard()
                player.randomPlacement()
                const placementOverlay = document.querySelector('#gameSetup')
                    placementOverlay.classList.add('hidden')
                    console.log('done')
                shipCount = -1
                player.board.printBoard()
                generateUserBoard(player)
                return

            })

            playerBoard.childNodes.forEach(box => {
                box.addEventListener('mouseover', function hoverHandler(e){
                    if(shipCount >= 0){
                        let index = String(e.target.id).slice(1)
                        if(player.board.validPlacement(ship,Number(index),rotation)){
                            indicator(player, ship,Number(index),rotation)
                        }else{
                            indicatorOff(player, ship,Number(index),rotation)
                        }
                    }
                })
                box.addEventListener('click', function clickHandler(e){
                    if(shipCount >= 0){
                        let index = String(e.target.id).slice(1)
                        if(player.board.validPlacement(ship,Number(index),rotation)){
                            player.chosenPlacement(ship,Number(index),rotation)
                            // box.removeEventListener('click', clickHandler(e))
                           
                            ship = shipList[--shipCount]
                            shipPlaced++
                            if(shipCount >= 0){
                                placementOverlayRender(shipPlaced, ship)
                            }else{
                                const placementOverlay = document.querySelector('#gameSetup')
                                placementOverlay.classList.add('hidden')
                                console.log('done')
                            }
                        }
                    }
                    
                })
                })
            }

    }

    function indicatorOff(player, ship, index, rotation){
        const playerBoard = document.querySelector('#left-board')
        playerBoard.childNodes.forEach(e => {
            if(player.board.board[Number(String(e.id).slice(1))] == 0){
                e.className = ''
            }
        })
    }

    function indicator(player, ship, index, rotation){
        const playerBoard = document.querySelector('#left-board')
        playerBoard.childNodes.forEach(e => {
            if(player.board.board[Number(String(e.id).slice(1))] == 0){
                e.className = ''
            }
        })
        if(rotation === 'h' && player.board.validPlacement(ship,index,rotation)){
                for(let i=0; i<ship.length; i++){
                    playerBoard.childNodes[index+i+1].className = 'filled'
                    
                }
        }else if(rotation === 'v'){
                for(let i=0; i<ship.length; i++){
                    playerBoard.childNodes[index+i*10+1].className = 'filled'
                }
        }


    }

    const statusUpdate = () =>{
        // Middle Status
        const currentTurn = document.querySelector('#turn h1')
        currentTurn.textContent = turn
        const currentRemaining = document.querySelector('#remaining h1')
        currentRemaining.textContent = remaining
        const playerAttack = document.querySelector('#attack-p1 h1')
        playerAttack.textContent = lastAttack1
        const enemyAttack = document.querySelector('#attack-p2 h1')
        enemyAttack.textContent = lastAttack2
        const currentBattle = document.querySelector('#Battle-Status h1')
        currentBattle.textContent = battleStatus
        // Global Status
        const globalStatus = document.querySelector('.global-status-grid')
        globalStatus.innerHTML = `
            <h3 id="game-count">Number of Games: ${totalGames}</h3>
            <h3 id="sunk-count">Number of Times Hit: ${totalHits}</h3>
            <h3 id="win-count">Number of Games Won: ${totalWin}</h3>
            <h3 id="shot-count">Number of Shots Fired: ${totalShots}</h3>
        `
    }

    const generateUserBoard = (player) => {
        const playerBoard = document.querySelector('#left-board')
        playerBoard.childNodes.forEach(box => {
            let loc = String(box.id).slice(1)
            if(loc){
                if(player.board.board[loc] === 1){
                    box.className = 'filled'   
                }else if(player.board.board[loc] === -1){
                    box.classList.add('hit')
                }else if(player.board.board[loc] === -2){
                    box.className = 'missed' 
                }else{
                    box.className = ''
                }
            }
        });
    }

    const generateEnemyBoard = (player)=>{
        const enemyBoard = document.querySelector('#right-board')
        enemyBoard.childNodes.forEach(box => {
            let loc = String(box.id).slice(1)
            if(loc){
                if(player.enemyBoard[loc] === -1){
                    box.className = 'hit'   
                }else if(player.enemyBoard[loc] === -2){
                    box.classList.add('missed')
                }else{
                    box.className = ''
                }
            }
        })

    }

    const gameOverOverlay = (victory=true, turn, player, enemy)=>{


        const overOverlay = document.querySelector('#gameOver')
        overOverlay.classList.toggle('hidden')
        const overOverlayScore = document.querySelector('#gameOver .top')
        overOverlayScore.innerHTML = `
            <h4>YOU ${victory? 'WON' : 'LOST'} IN</h4>
            <h1>${turn} Turns</h1>
            <h4>Play Again?</h4>
            <br>
        `
        

    }


    

    const enemyBoardEvent = (player, enemy)=>{
        const enemyBoard = document.querySelector('#right-board')
        enemyBoard.childNodes.forEach(box => {
                box.addEventListener('click', e =>{
                    e.stopPropagation
                    if(player){
                        let coordinate =  String(e.target.id).slice(1)
                        let [attack, attackStatus] = player.hitEnemy(coordinate, enemy)
                        if(attack){
                            lastAttack1 = attackStatus
                            generateEnemyBoard(player)
                            if(enemy.randomHitEasy(player)){
                                totalHits++
                                lastAttack2 = 'Hit'
                            }else{
                                lastAttack2 = 'Missed'
                            }
                            generateUserBoard(player)
                            turn++
                            totalShots++
                            remaining = enemy.hp
                            statusUpdate()
                        }
                        if(enemy.hp===0  || turn ===100){
                            console.log('game Finished')
                            gameOverOverlay(true, turn, player, enemy)
                            totalGames++
                            totalWin++
                            turn = 0
                            remaining = 17
                        }else if(player.hp===0){
                            console.log('game Finished')
                            gameOverOverlay(false, turn, player, enemy)
                            totalGames++
                            turn = 0
                            remaining = 17
                        }
                        
                    }
                })
            }
        )

    }


    


 return {initialRender, generateUserBoard, generateEnemyBoard, statusUpdate, enemyBoardEvent, placementRender, resetScore}
}

export default display