class Game {
    constructor() {
        this.renderer = new Renderer();
        this.player = new Player(100, 100, 30, 30);
        this.player.draw(this.renderer.foregroundCtx);
    }
}

function start() {
    new Game();
}