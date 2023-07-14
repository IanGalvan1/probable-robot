import { Container, Texture, TilingSprite,} from "pixi.js";
import { Iupdateable } from "../aplicaciones/Iupdateable";
import {  WIDTH } from "..";
import { Player } from "./Player";
import { Platform } from "../Escenas/Platform";
import { checkCollision } from "../aplicaciones/IHitbox";
import { HEIGHT } from "..";
import { Floor } from "../Escenas/Floor";


export class Estrella extends Container implements Iupdateable {

    private PlayerA: Player;
    
    private plat:Platform[];

    private floor: Floor;

    private world:Container;

    private background: TilingSprite;

    private gameSpeed: number = 200;

    private timePassed:number = 0;

    constructor()
    {
        super()

        this.world = new Container();
        
        this.PlayerA = new Player();

        this.world.addChild(this.PlayerA)

        this.background = new TilingSprite(Texture.from("bg"), WIDTH*2, HEIGHT);
        this.addChild(this.background);

        this.floor = new Floor;
        this.addChild(this.floor);

        this.plat=[];

        let platform = new Platform();
        this.plat.push(platform);
        this.world.addChild(platform);

        platform.position.set(650, 650);
        platform.scale.set(5, 5);

        platform= new Platform();
        this.plat.push(platform);
        this.world.addChild(platform);

        platform.position.set(950, 450);
        platform.scale.set(5, 5);

        platform= new Platform();
        this.plat.push(platform);
        this.world.addChild(platform);

        platform.position.set(1278, 395);
        platform.scale.set(5, 5);

        platform= new Platform();
        this.plat.push(platform);
        this.world.addChild(platform);

        platform.position.set(1778, 495);
        platform.scale.set(5, 5);

        
        this.addChild(this.world);

    }
    public update(deltaTime: number, _deltaFrame: number): void {
        this.PlayerA.update(deltaTime);
        
        this.timePassed += deltaTime;

        if (this.timePassed > (2000 * 200/this.gameSpeed)){

            this.gameSpeed += 10;
            this.timePassed = 0;
            const platform= new Platform();
            this.plat.push(platform);
            this.world.addChild(platform);

            platform.position.set(WIDTH, Math.random()*800);
            platform.scale.set(5, 5);

        }

        for (let platform of this.plat){
            // console.log(checkCollision(this.PlayerA, platform));
            platform.speed.x = - this.gameSpeed;
            platform.update(deltaTime/1000);
            const overlap = checkCollision(this.PlayerA, platform);
            if (overlap != null)
            {
                this.PlayerA.separate(overlap, platform.position);
                
            }

            const overlapfloor = checkCollision(this.PlayerA, this.floor);
            if (overlapfloor != null)
            {
                this.PlayerA.separatefloor(overlapfloor, this.floor.position);
                
            }
            
            if (platform.getHitbox().right < 0){
                platform.destroy();
            }
        }        

        this.plat = this.plat.filter((elem => !elem.destroyed))

        // this.world.x = -this.PlayerA.x * this.worldTransform.a + WIDTH/4;
        this.background.tilePosition.x -= this.gameSpeed * deltaTime/1000;/** 0.5 efecto paralax*/;

        // this.world.y = -this.PlayerA.y * this.worldTransform.d + WIDTH/2;
        // this.background.tilePosition.y = this.world.y /* *0.5*/;


        if (this.PlayerA.x > WIDTH)
        {
            this.PlayerA.x = WIDTH;

        }else if (this.PlayerA.x < 0)
        {
            this.PlayerA.x = 0;

        }


        // if (this.PlayerA.y > this.floor)
        // {
        //     this.PlayerA.y = 900;
        //     this.PlayerA.speed.y = 0;
        //     this.PlayerA.canJump = true;

        // }


        
    }
    
}
