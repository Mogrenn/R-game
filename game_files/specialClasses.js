class SpecialClasses extends Player{
    constructor(x, y, w, h, vx, vy, ctx) {
        super(x, y, w, h, vx, vy, ctx);
    }

    ability1() {
        throw new Error("Implement ability!!");
    }


}