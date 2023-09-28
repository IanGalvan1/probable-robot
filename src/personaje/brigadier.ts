import { AnimatedSprite, Container, Graphics, ObservablePoint, Rectangle, Sprite, Texture } from "pixi.js";
import { PhysicsContainer } from "../aplicaciones/PhysicsContainer";
// import { HEIGHT, WIDTH } from "..";
import { Keyboard } from "../aplicaciones/Keyboard";
import { IHitbox } from "../aplicaciones/IHitbox";


export class briga extends PhysicsContainer implements IHitbox {

    private brigadierstand: Sprite;
    private brigadierfrente: AnimatedSprite;
    private brigadierlado: AnimatedSprite;
    private brigadierarriba: AnimatedSprite;
    // private PhysBriga: PhysicsContainer;

    // private static readonly GRAVITY =  350;
    private static readonly MOVE_SPEED =  2720;
    // private static readonly JUMP_SPEED =  600;

    public canJump = true;

    private hitbox : Graphics;

    private brigadier : Container;

    constructor()
    {
        super()

        this.brigadier = new Container;

        this.brigadierstand = Sprite.from("/Brigadier/Brigadier Stand.png");

        this.brigadierstand.position.set(50,750);
        this.brigadierstand.anchor.set(0.5, 0.5);
        this.brigadierstand.scale.set(0.5, 0.5);

        this.hitbox =new Graphics();
        this.hitbox.beginFill(0x00FF00, 0.0001);
        this.hitbox.drawRect(50,750,190,70);
        this.hitbox.endFill();
        this.hitbox.x = -90;
        this.hitbox.y= 140;
        
        this.brigadier.addChild(this.brigadierstand);

        this.brigadierfrente = new AnimatedSprite(
            [
                Texture.from("/Brigadier/BrigadierCaminando1.png"),
                Texture.from("/Brigadier/BrigadierCaminando2.png"),
                Texture.from("/Brigadier/BrigadierCaminando3.png"),
                Texture.from("/Brigadier/BrigadierCaminando4.png")
            ],
            true
        );
        this.brigadierfrente.play();
        this.brigadierfrente.animationSpeed = 0.08

        
        this.brigadierfrente.position.set(50,750);
        this.brigadierfrente.anchor.set(0.5, 0.5);
        this.brigadierfrente.scale.set(0.5, 0.5);

        this.hitbox =new Graphics();
        this.hitbox.beginFill(0x00FF00, 0.0001);
        this.hitbox.drawRect(50,750,190,70);
        this.hitbox.endFill();
        this.hitbox.x = -90;
        this.hitbox.y= 140;
        
        this.brigadier.addChild(this.brigadierfrente);


        // ----------------------------------------

        this.brigadierlado  = new AnimatedSprite(
            [
                Texture.from("/Brigadier/BrigadierCaminaLado1.png"),
                Texture.from("/Brigadier/BrigadierCaminaLado2.png"),
                Texture.from("/Brigadier/BrigadierCaminaLado3.png"),
                Texture.from("/Brigadier/BrigadierCaminaLado4.png"),
                Texture.from("/Brigadier/BrigadierCaminaLado5.png"),
                Texture.from("/Brigadier/BrigadierCaminaLado6.png"),
            ],
            true
        );
        this.brigadierlado.play();
        this.brigadierlado.animationSpeed = 0.08

        
        this.brigadierlado.position.set(50,750);
        this.brigadierlado.anchor.set(0.5, 0.5);
        this.brigadierlado.scale.set(0.5, 0.5);

        this.brigadier.addChild(this.brigadierlado);


        // ----------------------------------------

        this.brigadierarriba  = new AnimatedSprite(
            [
                Texture.from("/Brigadier/BrigadierLopez atras 1.png"),
                Texture.from("/Brigadier/BrigadierLopez atras 2.png"),
                Texture.from("/Brigadier/BrigadierLopez atras 3.png"),
                Texture.from("/Brigadier/BrigadierLopez atras 4.png"),

            ],
            true
        );
        this.brigadierarriba.play();
        // this.brigadierarriba.anchor.set(0.5 ,1);
        this.brigadierarriba.animationSpeed = 0.08

        
        this.brigadierarriba.position.set(50,750);
        this.brigadierarriba.anchor.set(0.5, 0.5);
        this.brigadierarriba.scale.set(0.5, 0.5);

        this.brigadier.addChild(this.brigadierarriba);

        this.brigadier.addChild(this.hitbox);

        this.addChild(this.hitbox);

        // this.acceleration.y = briga.GRAVITY;


    }
    // public update(_deltaTime: number, deltaFrame: number): void {
    //     this.brigadierfrente.update(deltaFrame);

    //     // const dt = deltaTime /1000;

    //     // this.PhysBriga.update(dt);

    //     // if (this.PhysBriga.x + this.PhysBriga.width > WIDTH)
    //     // {
    //     //     this.PhysBriga.x = WIDTH - this.PhysBriga.width;
    //     //     this.PhysBriga.speed.x = Math.abs(this.PhysBriga.speed.x) * -1;
    //     // }else if (this.PhysBriga.x < WIDTH)
    //     // {
    //     //     this.PhysBriga.x = 0;
    //     //     this.PhysBriga.x = Math.abs(this.PhysBriga.speed.x);

    //     // }


    //     // if (this.PhysBriga.y + this.PhysBriga.height > HEIGHT)
    //     // {
    //     //     this.PhysBriga.y = HEIGHT - this.PhysBriga.height;

    //     // }


    public override update(deltaMS: number)
    {
        super.update(deltaMS/1000);
        this.brigadierarriba.update(deltaMS / 1000/60);

        if (Keyboard.state.get("ArrowRight"))
        {
            this.addChild(this.brigadierlado);
            this.removeChild(this.brigadierfrente);
            this.removeChild(this.brigadierstand);
            this.removeChild(this.brigadierarriba);
            // this.brigadierarriba.x = briga.MOVE_SPEED;
            // this.brigadierlado.x = briga.MOVE_SPEED;
            // this.brigadierfrente.x = briga.MOVE_SPEED;
            this.brigadierlado.scale.x = 0.5;

            this.speed.x = briga.MOVE_SPEED;

        } else if (Keyboard.state.get("ArrowLeft"))
        {
            this.addChild(this.brigadierlado);
            this.removeChild(this.brigadierfrente);
            this.removeChild(this.brigadierarriba);
            this.removeChild(this.brigadierstand);
            // this.brigadierarriba.x = -briga.MOVE_SPEED;
            // this.brigadierlado.x = -briga.MOVE_SPEED;
            // this.brigadierfrente.x = -briga.MOVE_SPEED;
            this.brigadierlado.scale.x = -0.5;

            this.speed.x = -briga.MOVE_SPEED;


        }else if (Keyboard.state.get("ArrowUp"))
        {
            this.addChild(this.brigadierarriba);
            this.removeChild(this.brigadierfrente);
            this.removeChild(this.brigadierlado);
            this.removeChild(this.brigadierstand);
            // this.brigadierarriba.y = -briga.MOVE_SPEED;
            // this.brigadierfrente.y = -briga.MOVE_SPEED;
            // this.brigadierlado.y = -briga.MOVE_SPEED;

            this.speed.y = -briga.MOVE_SPEED;

        }
        else if (Keyboard.state.get("ArrowDown"))
        {
            this.addChild(this.brigadierfrente);
            this.removeChild(this.brigadierarriba);
            this.removeChild(this.brigadierlado);
            this.removeChild(this.brigadierstand);
            // this.brigadierarriba.y = briga.MOVE_SPEED;
            // this.brigadierfrente.y = briga.MOVE_SPEED;
            // this.brigadierlado.y = briga.MOVE_SPEED;

            this.speed.y = briga.MOVE_SPEED;

        
        } else {
            this.removeChild(this.brigadierlado);
            this.removeChild(this.brigadierarriba);
            this.removeChild(this.brigadierfrente);
            this.addChild(this.brigadierstand);

            this.speed.x = 0;
            this.speed.y = 0;
        };
    }

    public getHitbox():Rectangle
    {
        return this.hitbox.getBounds()
    }

    


    // public separate(overlap: Rectangle, platform: ObservablePoint<any>) {
    //     if (overlap.width < overlap.height)
    //             {
    //                 if (this.x > platform.x)
    //                 {
    //                     this.x += overlap.width;

    //                 } else if (this.x < platform.x){

    //                     this.x -= overlap.width;
    //                 }

    //             } else{

    //                 if (this.y > platform.y)
    //                 {
    //                     this.y += overlap.height;

    //                     this.speed.y = 0;
    //                     this.canJump = false;

    //                 } else if (this.y < platform.y){

    //                     this.y -= overlap.height;
    //                     this.speed.y = 0;
    //                     this.canJump = true;
    //                 }

    //             }
    // }

    public separatefloor(overlapfloor: Rectangle, floor: ObservablePoint<any>) {
        if (overlapfloor.width < overlapfloor.height)
        {
            if (this.x > floor.x)
            {
                this.x += overlapfloor.width;

            } else if (this.x < floor.x){

                this.x -= overlapfloor.width;
            }

        } else{

            if (this.y > floor.y)
            {
                this.y -= overlapfloor.height;
                this.speed.y = 0;
                this.canJump = true;

            } else if (this.y < floor.y){

                this.y += overlapfloor.height;
                this.speed.y = 0;
                this.canJump = false;
            }

        }
        
        
    // }
    // public separatetop(overlaptop: Rectangle, top: ObservablePoint<any>) {
    //     if (overlaptop.width < overlaptop.height)
    //     {
    //         if (this.x > top.x)
    //         {
    //             this.x -= overlaptop.width;

    //         } else if (this.x < top.x){

    //             this.x += overlaptop.width;
    //         }

    //     } else{

    //         if (this.y > top.y)
    //         {
    //             this.y -= overlaptop.height;
    //             this.speed.y = 0;
    //             this.canJump = true;

    //         } else if (this.y < top.y){

    //             this.y += overlaptop.height;
    //             this.speed.y = 0;
    //             this.canJump = false;
    //         }

    //     }
        
        
    // }

    // public separatewals(overlapwals: Rectangle, wals: ObservablePoint<any>) {
    //     if (overlapwals.width < overlapwals.height)
    //     {
    //         if (this.x > wals.x)
    //         {
    //             this.x -= overlapwals.width;

    //         } else if (this.x < wals.x){

    //             this.x += overlapwals.width;
    //         }

    //     } else{

    //         if (this.y > wals.y)
    //         {
    //             this.y -= overlapwals.height;
    //             this.speed.y = 0;
    //             this.canJump = true;

    //         } else if (this.y < wals.y){

    //             this.y += overlapwals.height;
    //             this.speed.y = 0;
    //             this.canJump = false;
    //         }

    //     }
    // }
    // public separatewals2(overlapwals2: Rectangle, wals2: ObservablePoint<any>) {
    //     if (overlapwals2.width < overlapwals2.height)
    //     {
    //         if (this.x > wals2.x)
    //         {
    //             this.x += overlapwals2.width;

    //         } else if (this.x < wals2.x){

    //             this.x -= overlapwals2.width;
    //         }

    //     } else{

    //         if (this.y < wals2.y)
    //         {
    //             this.y -= overlapwals2.height;
    //             this.speed.y = 0;
    //             this.canJump = true;

    //         } else if (this.y > wals2.y){

    //             this.y += overlapwals2.height;
    //             this.speed.y = 0;
    //             this.canJump = false;
    //         }

    //     }
    }
}
