class Player extends Entity{

    constructor(x, y, w, h, specialClass) {
        super(x, y, w, h);
        this.specialClass = specialClass;
        this.vx = 0;
        this.vy = 0;
        this.playerName = "Test";
    }

    movement() {
        this.x += this.vx;
        this.y += this.vy;
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