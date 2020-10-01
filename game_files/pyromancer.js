class Pyromancer extends SpecialClasses {

    constructor(x, y, w, h, vx, vy, ctx) {
        super(x, y, w, h, vx, vy, ctx);
        this.fireBalls = [];
        this.animationCtx = ctx;
        requestAnimationFrame(() => this.draw());
    }

    //Fireball
    ability1() {
        this.fireBalls.push(new FireBall(this.x, this.y, 10, 10, 1, 1, this.animationCtx));
    }
}

class FireBall extends MovableEntity {

    constructor(x, y, w, h, vx, vy, ctx) {
        super(x, y, w, h, vx, vy);
        this.startX = x;
        this.startY = y;
        this.currentX = x;
        this.currentY = y;
        this.dead = false;
        this.ctx = ctx;
        requestAnimationFrame(() => this.draw());
    }

    draw() {
        this.ctx.clearAnimationCtx();
        if (!this.dead) {
            this.update();
            this.ctx.animationCtx.beginPath();
            this.ctx.animationCtx.strokeStyle = "#00FF00";
            this.ctx.animationCtx.rect(this.currentX, this.currentY, this.width, this.height);
            this.ctx.animationCtx.stroke();
            this.ctx.animationCtx.closePath();
            requestAnimationFrame(() => this.draw());
        }
    }

    update() {
        if (Math.abs(this.currentX - this.startX) > 200 || Math.abs(this.currentY - this.startY) > 200) {
            this.dead = true;
        } else {
            this.currentX += this.vx;
        }
    }
}