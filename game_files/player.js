class Player extends MovableEntity{

    constructor(x, y, w, h, specialClass, vx, vy) {
        super(x, y, w, h, vx, vy);
        this.specialClass = specialClass;
        this.playerName = "Test";
    }

    draw(ctx) {
        this.movement();
        ctx.beginPath();
        ctx.strokeStyle = "Red";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.closePath();
    }
}