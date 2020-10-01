class Renderer {
    constructor() {
        this.backgroundCanvas = document.getElementById("background-canvas");
        this.foregroundCanvas = document.getElementById("foreground-canvas");
        this.animationCanvas = document.getElementById("animation-canvas");
        this.backgroundCtx = this.backgroundCanvas.getContext("2d");
        this.foregroundCtx = this.foregroundCanvas.getContext("2d");
        this.animationCtx = this.animationCanvas.getContext("2d");
    }

    clearForegroundCtx() {
        this.foregroundCtx.clearRect(0,0, game.renderer.foregroundCanvas.width, game.renderer.foregroundCanvas.height);
    }

    clearAnimationCtx() {
        this.animationCtx.clearRect(0,0, this.foregroundCanvas.width, this.foregroundCanvas.height);
    }

}