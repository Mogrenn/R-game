let game;

class Game {
    constructor() {
        this.renderer = new Renderer();
        addEventListener("keydown", keyBoardListenerDown);
        addEventListener("keyup", keyBoardListenerUp);
        addEventListener("mousedown", onMousedown);
        this.player = new Pyromancer(100, 100, 30, 30, 0, 0);
    }

    clearForeground() {
        this.renderer.foregroundCtx.clearRect(0,0, game.renderer.foregroundCanvas.width, game.renderer.foregroundCanvas.height);
    }

    gameLoop() {
        game.clearForeground();

        for (let i = 0; i < game.player.fireBalls.length; i++) {
            if (!game.player.fireBalls[i].dead) {
                game.player.fireBalls[i].draw(game.renderer.foregroundCtx);
            } else {
                console.log("test")
                game.player.fireBalls.splice(i, 1);
            }
        }

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

function onMousedown(e) {
    console.log(e.button);
    switch (e.button) {
        case 0:
            game.player.ability1();
    }
}

function start() {
    game = new Game();
    requestAnimationFrame(game.gameLoop);
}