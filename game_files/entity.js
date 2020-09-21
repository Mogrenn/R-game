class Entity {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    draw(ctx) {
        console.log("Hej");
        ctx.beginPath();
        ctx.strokeStyle = "Red";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
}