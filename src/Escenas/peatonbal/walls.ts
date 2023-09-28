import { Graphics, Rectangle} from "pixi.js";
import { IHitbox } from "../../aplicaciones/IHitbox";
import { PhysicsContainer } from "../../aplicaciones/PhysicsContainer";
import { SceneManager } from "../SceneManager";



export class Wall extends PhysicsContainer implements IHitbox {

    private hitbox: any;
    constructor()
        {
            super();
            
            // this.hitbox =new Graphics();
            // this.hitbox.beginFill(0x00FFFF, 0.3);
            // this.hitbox.drawRect(0,935, WIDTH , 300);
            // this.hitbox.endFill();
            // this.addChild(this.hitbox);
            
            this.hitbox =new Graphics();
            this.hitbox.beginFill(0x00FF00, 0.0001);
            this.hitbox.drawRect(0,0,100,SceneManager.HEIGHT);
            this.hitbox.endFill();
            this.addChild(this.hitbox);

            this.hitbox.x = 280;
        }

        public getHitbox():Rectangle
        {
            return this.hitbox.getBounds()
        }
}