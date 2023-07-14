import { Graphics, Rectangle, Sprite } from "pixi.js";
import { IHitbox } from "../aplicaciones/IHitbox";
import { PhysicsContainer } from "../aplicaciones/PhysicsContainer";

export class Platform extends PhysicsContainer implements IHitbox {

    private hitbox: any;
    constructor()
        {
            super();
            const spr = Sprite.from("special");
            // const spr2 = Sprite.from("brick");
            this.addChild(spr);
            // this.addChild(spr2);

            // spr.position.set(250, 300);
            // spr.scale.set(5, 5);
            // spr2.position.set(700, 300);
            // spr2.scale.set(5, 5);

            this.hitbox =new Graphics();
            this.hitbox.beginFill(0x00FFFF, 0.3);
            this.hitbox.drawRect(0,0,16,16);
            this.hitbox.endFill();
            this.addChild(this.hitbox);

        }

        public getHitbox():Rectangle
        {
            return this.hitbox.getBounds()
        }
}