class Player extends MovableEntity{

    constructor(x, y, w, h, vx, vy, ctx) {
        super(x, y, w, h, vx, vy);
        this.playerName = "Test";
        this.ctx = ctx;
    }

    draw() {
        this.ctx.clearForegroundCtx();
        this.movement();
        this.ctx.foregroundCtx.beginPath();
        this.ctx.foregroundCtx.strokeStyle = "#FF0000";
        this.ctx.foregroundCtx.rect(this.x, this.y, this.width, this.height);
        this.ctx.foregroundCtx.stroke();
        this.ctx.foregroundCtx.closePath();
        requestAnimationFrame(() => this.draw());
    }
}