import { Container, Sprite,} from "pixi.js";
import { Iupdateable } from "../aplicaciones/Iupdateable";
import { WIDTH } from "..";
import { Player } from "./Player";
import { Platform } from "../Escenas/Platform";
import { checkCollision } from "../aplicaciones/IHitbox";


export class Estrella extends Container implements Iupdateable {

    private PlayerA: Player;
    
    private plat:Platform[];

    constructor()
    {
        super()
        
        this.PlayerA = new Player();

        this.addChild(this.PlayerA);

        this.plat=[];

        const bg = Sprite.from("bg");
        const platform = new Platform();
        this.plat.push(platform);
        const platform2= new Platform();
        this.plat.push(platform2);
        const platform3= new Platform();
        this.plat.push(platform3);


        platform.position.set(200, 650);
        platform.scale.set(5, 5);

        platform3.position.set(1178, 695);
        platform3.scale.set(5, 5);

        platform2.position.set(550, 450);
        platform2.scale.set(5, 5);

        this.addChild(bg);
        this.addChild(platform);
        this.addChild(platform2);
        this.addChild(platform3);



    }
    public update(deltaTime: number, _deltaFrame: number): void {
        this.PlayerA.update(deltaTime);
        
        for (let platform of this.plat){
            // console.log(checkCollision(this.PlayerA, platform));
            const overlap = checkCollision(this.PlayerA, platform);
            if (overlap != null)
            {
                this.PlayerA.separate(overlap, platform.position);
                
            }
            
        }        


        if (this.PlayerA.x > WIDTH)
        {
            this.PlayerA.x = WIDTH;

        }else if (this.PlayerA.x < 0)
        {
            this.PlayerA.x = 0;

        }


        if (this.PlayerA.y > 900)
        {
            this.PlayerA.y = 900;
            // this.PlayerA.speed.y = 0;
            // this.PlayerA.canJump = true;

        }
        
    }
    
}
