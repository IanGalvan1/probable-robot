import { Container, Texture, TilingSprite,} from "pixi.js";
import { checkCollision } from "../../aplicaciones/IHitbox";
import { SceneManager } from "../SceneManager";
import { briga } from "../../personaje/brigadier";
import { Iupdateable } from "../../aplicaciones/Iupdateable";
import { button } from "../../aplicaciones/button";
import { Floor } from "./Floor";
import { Top } from "./top";
import { Wall } from "./walls";
import { Tween } from "tweedle.js";
import { VariablesCompartidas } from "../../aplicaciones/VariablesComparidas";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { mapa } from "../Menu/mapa";


export class veinti extends SceneBase implements Iupdateable {

    private OpenMapa : button;

    private PlayerA: briga;

    private floor: Floor;

    private top: Top;

    private wals: Wall;

    private wals2: Wall;
    
    private world:Container;

    private background: TilingSprite;

    private termo: button;

    private a: Tween<briga>;

    private b: Tween<briga>;


    constructor()
    {
        super()
        


        // --------------------------------------

        this.floor = new Floor;

        this.top = new Top;

        this.wals = new Wall;

        this.wals2 = new Wall;

        this.wals2.x = 2080;
        this.wals2.y = 1080;
        this.wals2.angle = 180;

        

// -----------------------------------


// -----------------------------------

        this.world = new Container();
        
        this.PlayerA = new briga();

        this.a = new Tween (this.PlayerA);
        this.a.to({x:750, y:-100}, 2000).onComplete(()=>{
            VariablesCompartidas.tweennpc = 1;
            console.log("bbbbbb")
        });

        this.b = new Tween (this.PlayerA);
        this.b.to({x:478, y:0}, 2000);

        this.PlayerA.position.set(600, 0);
        
        this.background = new TilingSprite(Texture.from("laventi"), SceneManager.WIDTH, SceneManager.HEIGHT);
        
        this.world.addChild(this.floor);
        this.world.addChild(this.top);
        this.world.addChild(this.wals);
        this.world.addChild(this.wals2);
        this.addChild(this.background);  
        
        this.world.addChild(this.PlayerA);
        
        this.addChild(this.world);

        
// -----------------------------------

        this.OpenMapa = new button(
            Texture.from("/objetos/abrir mapa.png"), 
            Texture.from("/objetos/abrir mapa.png"), 
            Texture.from("/objetos/abrir mapa apretado.png")

            );
            this.OpenMapa.buttonEvents.on("buttonClicked", this.onButtonMapa, this);
            this.OpenMapa.scale.set(2.5,2.5);

            this.OpenMapa.position.x=15;
            this.OpenMapa.position.y=15;

        this.termo = new button(
            Texture.from("/objetos/estanli.png"),
            Texture.from("/objetos/estanli3.png"),
            Texture.from("/objetos/estanli2.png"),
        );

        this.addChild(this.OpenMapa);

        this.termo.position.set(378, 800);
        this.termo.scale.set(0.2, 0.2);

        if(VariablesCompartidas.peladoCharla == 1 && VariablesCompartidas.termo ==0){
            this.addChild(this.termo);
        }

        this.termo.buttonEvents.on("buttonClicked", this.onButtonClickTextoEstanli,this)

    }

    
    private onButtonClickTextoEstanli():void{
        console.log ("funciona el while")
        
        if (VariablesCompartidas.peladoCharla == 1){
            this.termo.position.x=10000;
            this.removeChild(this.termo);
            VariablesCompartidas.termo = 1;
            console.log("YA TENES EL TERMO", VariablesCompartidas.termo)
        }
    }



    public update(deltaTime: number, _deltaFrame: number): void {
        this.PlayerA.update(deltaTime);
        
        // this.timePassed += deltaTime;

        // if (this.timePassed > (2000 * 200/this.gameSpeed)){

        //     this.gameSpeed += 10;
        //     this.timePassed = 0;
        //     const platform= new Platform();
        //     this.plat.push(platform);
        //     this.world.addChild(platform);

        //     platform.position.set(WIDTH, Math.random()*800);
        //     platform.scale.set(5, 5);

        // }

        // for (let platform of this.plat){
            // console.log(checkCollision(this.PlayerA, platform));
            // platform.speed.x = - this.gameSpeed;
            // platform.update(deltaTime/1000);
            // const overlap = checkCollision(this.PlayerA, this.hit);
            // if (overlap != null)
            // {
            //     // this.PlayerA.separate(overlap, this.tincho.position);
            //     this.onButtonClick();
            // }

            const overlapfloor = checkCollision(this.PlayerA, this.floor);

            if (overlapfloor != null)
            {
                this.PlayerA.separatefloor(overlapfloor, this.floor.position);
                

            }
            const overlaptop = checkCollision(this.PlayerA, this.top);

            if (overlaptop != null)
            {
                this.PlayerA.separatefloor(overlaptop, this.top.position);
                
            }

            const overlapwals = checkCollision(this.PlayerA, this.wals);

            if (overlapwals != null)
            {
                this.PlayerA.separatefloor(overlapwals, this.wals.position);
                
            }

            const overlapwals2 = checkCollision(this.PlayerA, this.wals2);

            if (overlapwals2 != null)
            {
                this.PlayerA.separatefloor(overlapwals2, this.wals2.position);
                
            }
            
            // if (platform.getHitbox().right < 0){
            //     platform.destroy();
            // }
        // }        

        // this.plat = this.plat.filter((elem => !elem.destroyed))

        // this.world.x = -this.PlayerA.x * this.worldTransform.a + WIDTH/4;
        // this.background.tilePosition.x = this.world.x  *0.3;
        // // // this.background.tilePosition.x -= this.gameSpeed * deltaTime/1000;/** 0.5 efecto paralax*/;

        // this.world.y = -this.PlayerA.y * this.worldTransform.d + HEIGHT/2.2;
        // this.background.tilePosition.y = this.world.y  *0.3;


        if (this.PlayerA.x > SceneManager.WIDTH)
        {
            this.PlayerA.x = SceneManager.WIDTH;

        }else if (this.PlayerA.x < 0)
        {
            this.PlayerA.x = 0;

        }


        // if (this.PlayerA.y > HEIGHT)
        // {
        //     this.PlayerA.y = 900;
        //     this.PlayerA.speed.y = 0;
        //     this.PlayerA.canJump = true;

        }

            private onButtonMapa():void{
        SceneManager.changeScene(new mapa)
    }
    

}
