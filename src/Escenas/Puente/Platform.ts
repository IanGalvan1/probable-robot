import { Graphics, Rectangle } from "pixi.js";
import { IHitbox } from "../../aplicaciones/IHitbox";
import { PhysicsContainer } from "../../aplicaciones/PhysicsContainer";

export class Platform extends PhysicsContainer implements IHitbox {

    private hitbox: any;
    buttonEvent: any;
    constructor()
        {
            super();
            // const spr = Sprite.from("tincho");
            // // const spr2 = Sprite.from("brick");
            // this.addChild(spr);
            // this.addChild(spr2);

            // spr.position.set(250, 300);
            // spr.scale.set(1,1);
            // spr2.position.set(700, 300);
            // spr2.scale.set(5, 5);

            this.hitbox =new Graphics();
            this.hitbox.beginFill(0x00FF00, 0.0001);
            this.hitbox.drawRect(0,0,300,800);
            this.hitbox.endFill();
            this.addChild(this.hitbox);

        }

        public getHitbox():Rectangle
        {
            return this.hitbox.getBounds()
        }
}