class Player extends Entity{

    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.vx = 0;
        this.vy = 0;
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