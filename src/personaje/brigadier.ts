import { AnimatedSprite, Container, Texture } from "pixi.js";
import { Iupdateable } from "../aplicaciones/Iupdateable";
// import { PhysicsContainer } from "../aplicaciones/PhysicsContainer";
// import { HEIGHT, WIDTH } from "..";
import { Keyboard } from "../aplicaciones/Keyboard";


export class briga extends Container implements Iupdateable {

    private brigadierfrente: AnimatedSprite;
    private brigadierlado: AnimatedSprite;
    private brigadierarriba: AnimatedSprite;
    // private PhysBriga: PhysicsContainer;


    constructor()
    {
        super()

        this.brigadierfrente = new AnimatedSprite(
            [
                Texture.from("brigadiercaminaA1"),
                Texture.from("brigadiercaminaA2"),
                Texture.from("brigadiercaminaA3"),
                Texture.from("brigadiercaminaA4")
            ],
            true
        );
        this.brigadierfrente.play();
        this.brigadierfrente.animationSpeed = 0.08

        
        this.brigadierfrente.position.set(400, 200);
        // this.brigadierfrente.position.set(0, 0);
        this.brigadierfrente.scale.set(0.5, 0.5);

        this.brigadierlado  = new AnimatedSprite(
            [
                Texture.from("brigadiercaminaB1"),
                Texture.from("brigadiercaminaB2"),
                Texture.from("brigadiercaminaB3"),
                Texture.from("brigadiercaminaB4"),
                Texture.from("brigadiercaminaB5"),
                Texture.from("brigadiercaminaB6"),
            ],
            true
        );
        this.brigadierlado.play();
        this.brigadierlado.animationSpeed = 0.08

        
        this.brigadierlado.position.set(400, 200);
        this.brigadierlado.scale.set(0.5, 0.5);

        this.brigadierarriba  = new AnimatedSprite(
            [
                Texture.from("brigadiercaminaC1"),
                Texture.from("brigadiercaminaC2"),
                Texture.from("brigadiercaminaC3"),
                Texture.from("brigadiercaminaC4"),

            ],
            true
        );
        this.brigadierarriba.play();
        // this.brigadierarriba.anchor.set(0.5 ,1);
        this.brigadierarriba.animationSpeed = 0.08

        
        this.brigadierarriba.position.set(400, 200);
        this.brigadierarriba.scale.set(0.5, 0.5);

        // this.PhysBriga = new PhysicsContainer();
        // this.PhysBriga.speed.x = 500;
        // this.PhysBriga.speed.y = 100;

        // const auxZero = new Graphics();
        // auxZero.beginFill(0xFF00FF);
        // auxZero.drawCircle(0,0,10);
        // auxZero.endFill();

        // this.addChild(this.PhysBriga);

        // this.PhysBriga.addChild(this.brigadierfrente);
        // this.PhysBriga.addChild(auxZero);

    }
    public update(_deltaTime: number, deltaFrame: number): void {
        this.brigadierfrente.update(deltaFrame);

        // const dt = deltaTime /1000;

        // this.PhysBriga.update(dt);

        // if (this.PhysBriga.x + this.PhysBriga.width > WIDTH)
        // {
        //     this.PhysBriga.x = WIDTH - this.PhysBriga.width;
        //     this.PhysBriga.speed.x = Math.abs(this.PhysBriga.speed.x) * -1;
        // }else if (this.PhysBriga.x < WIDTH)
        // {
        //     this.PhysBriga.x = 0;
        //     this.PhysBriga.x = Math.abs(this.PhysBriga.speed.x);

        // }


        // if (this.PhysBriga.y + this.PhysBriga.height > HEIGHT)
        // {
        //     this.PhysBriga.y = HEIGHT - this.PhysBriga.height;

        // }
        
        if (Keyboard.state.get("KeyD"))
        {
            this.addChild(this.brigadierlado);
            this.removeChild(this.brigadierfrente);
            this.removeChild(this.brigadierarriba);
            this.brigadierarriba.x ++;
            this.brigadierlado.x ++;
            this.brigadierfrente.x ++;
            this.brigadierlado.scale.x = 0.5;

        } else if (Keyboard.state.get("KeyA"))
        {
            this.addChild(this.brigadierlado);
            this.removeChild(this.brigadierfrente);
            this.removeChild(this.brigadierarriba);
            this.brigadierarriba.x --;
            this.brigadierlado.x --;
            this.brigadierfrente.x --;
            this.brigadierlado.scale.x = -0.5;
            console.log ("a")

        }else if (Keyboard.state.get("KeyW"))
        {
            this.addChild(this.brigadierarriba);
            this.removeChild(this.brigadierfrente);
            this.removeChild(this.brigadierlado);
            this.brigadierarriba.y --;
            this.brigadierfrente.y --;
            this.brigadierlado.y --;
        }
        else if (Keyboard.state.get("KeyS"))
        {
            this.addChild(this.brigadierfrente);
            this.removeChild(this.brigadierarriba);
            this.removeChild(this.brigadierlado);
            this.brigadierarriba.y ++;
            this.brigadierfrente.y ++;
            this.brigadierlado.y ++;
        } else {
            this.removeChild(this.brigadierlado);
            this.removeChild(this.brigadierarriba);
            this.addChild(this.brigadierfrente);
        };
    }
}
