import { Graphics, Rectangle} from "pixi.js";
import { IHitbox } from "../aplicaciones/IHitbox";
import { PhysicsContainer } from "../aplicaciones/PhysicsContainer";
import { WIDTH } from "..";

export class Floor extends PhysicsContainer implements IHitbox {

    private hitbox: any;
    constructor()
        {
            super();

            this.hitbox =new Graphics();
            this.hitbox.beginFill(0x00FFFF, 0.3);
            this.hitbox.drawRect(0,935, WIDTH , 200);
            this.hitbox.endFill();
            this.addChild(this.hitbox);

        }

        public getHitbox():Rectangle
        {
            return this.hitbox.getBounds()
        }
}