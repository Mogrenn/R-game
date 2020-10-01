class MovableEntity extends Entity {
    constructor(x, y, w, h, vx, vy) {
        super(x, y, w, h);
        this.vx = vx;
        this.vy = vy;
    }

    movement() {
        this.x += this.vx;
        this.y += this.vy;
    }

    getVx() {
        return this.vx;
    }

    setVx(vx) {
        this.vx = vx;
    }

    getVy() {
        return this.vy;
    }

    setVy(vy) {
        this.vy = vy;
    }
}