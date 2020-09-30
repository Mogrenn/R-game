class Player extends MovableEntity{

    constructor(x, y, w, h, vx, vy) {
        super(x, y, w, h, vx, vy);
        this.playerName = "Test";
    }

    draw(ctx) {
        this.movement();
        ctx.beginPath();
        ctx.strokeStyle = "#FF0000";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.closePath();
    }
}