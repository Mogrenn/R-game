let game;

class Game {
    constructor() {
        this.renderer = new Renderer();
        addEventListener("keydown", keyBoardListenerDown);
        addEventListener("keyup", keyBoardListenerUp);
        this.player = new Player(100, 100, 30, 30, new Pyromancer(), 0, 0);
    }

    clearForeground() {
        this.renderer.foregroundCtx.clearRect(0,0, game.renderer.foregroundCanvas.width, game.renderer.foregroundCanvas.height);
    }

    gameLoop() {
        game.clearForeground();
        game.player.draw(game.renderer.foregroundCtx);
        requestAnimationFrame(game.gameLoop);
    }

}

function keyBoardListenerDown(e) {

    switch (e.keyCode) {
        case 68: //d
            game.player.vx = 1;
            break;
        case 83: //s
            game.player.vy = 1;
            break;
        case 65: //a
            game.player.vx = -1;
            break;
        case 87: //w
            game.player.vy = -1;
            break;
    }
}

function keyBoardListenerUp(e) {

    switch (e.keyCode) {
        case 68: //d
            if (game.player.vx !== -1)
                game.player.vx = 0;
            break;
        case 83: //s
            if (game.player.vy !== -1)
                game.player.vy = 0;
            break;
        case 65: //a
            if (game.player.vx !== 1)
                game.player.vx = 0;
            break;
        case 87: //w
            if (game.player.vy !== 1)
                game.player.vy = 0;
            break;
    }
}

function start() {
    game = new Game();
    requestAnimationFrame(game.gameLoop);
}