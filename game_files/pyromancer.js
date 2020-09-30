class Pyromancer extends SpecialClasses{

    constructor(x, y, w, h, vx, vy) {
        super(x, y, w, h, vx, vy);
        this.fireBalls = [];
    }

    //Fireball
    ability1() {
        this.fireBalls.push(new FireBall(this.x, this.y, 10, 10, 1, 1));
    }
}

class FireBall extends MovableEntity{

    constructor(x, y, w, h, vx, vy) {
        super(x, y, w, h, vx, vy);
        this.startX = x;
        this.startY = y;
        this.currentX = x;
        this.currentY = y;
    }

    draw(ctx) {
        this.update();
        ctx.beginPath();
        ctx.strokeStyle = "#00FF00";
        ctx.rect(this.currentX, this.currentY, this.width, this.height);
        ctx.stroke();
        ctx.closePath();
    }

    update() {
        if (Math.abs(this.currentX - this.startX) > 200 || Math.abs(this.currentY - this.startY) > 200) {

        } else {
            this.currentX += this.vx;
        }
    }
}