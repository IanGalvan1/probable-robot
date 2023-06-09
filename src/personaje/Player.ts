import { AnimatedSprite, Graphics, ObservablePoint, Rectangle, Texture } from "pixi.js";
import { PhysicsContainer } from "../aplicaciones/PhysicsContainer";
import { Keyboard } from "../aplicaciones/Keyboard";
import { IHitbox } from "../aplicaciones/IHitbox";

export class Player extends PhysicsContainer implements IHitbox
{
    

    private static readonly GRAVITY =  350;
    private static readonly MOVE_SPEED =  0;
    private static readonly JUMP_SPEED =  600;

    public canJump = true;

    private star: AnimatedSprite;

    private hitbox : Graphics;

    constructor()
    {
        super();
        
        this.star = new AnimatedSprite(
            [
                Texture.from("estrella1"),
                Texture.from("estrella2"),
                Texture.from("estrella3"),
                Texture.from("estrella4"),
                Texture.from("estrella5")
            ],
            true
        );
        this.star.play();
        this.star.anchor.set(0.5, 0.5);
        this.star.animationSpeed = 0.08;

        
        this.star.position.set(200, 900);
        this.star.scale.set(5, 5);

        this.hitbox =new Graphics();
        this.hitbox.beginFill(0xFF00FF, 0.3);
        this.hitbox.drawRect(0,0,16,16);
        this.hitbox.endFill();
        this.hitbox.x = -8;
        this.hitbox.y= -8;

        this.star.addChild(this.hitbox);

        this.addChild(this.star);

        this.acceleration.y = Player.GRAVITY;
        Keyboard.down.on("ArrowUp", this.jump, this);
    }

    public override destroy(options:any){
        super.destroy(options);
        Keyboard.down.off("ArrowUp", this.jump)
    }

    public override update(deltaMS: number)
    {
        super.update(deltaMS/1000);
        this.star.update(deltaMS / 1000/60);

        if(Keyboard.state.get("ArrowRight"))
        {
            this.speed.x = Player.MOVE_SPEED;
            this.star.scale.x = 5;
        }else if (Keyboard.state.get("ArrowLeft"))
        {
            this.speed.x = -Player.MOVE_SPEED;
            this.star.scale.x = -5;
        }else
        {
            this.speed.x = 0;
        }

        // if(Keyboard.state.get("ArrowUp") && this.canJump)
        // {
        //     this.jump();

        // }

        if (Keyboard.state.get("ArrowDown")){
            this.acceleration.y = Player.GRAVITY*5;
        } else {
            this.acceleration.y = Player.GRAVITY;

        }
    }

    private jump()
    {
        if (this.canJump){
        this.canJump = false;
        this.speed.y = -Player.JUMP_SPEED;
        }
    }

    public getHitbox():Rectangle
    {
        return this.hitbox.getBounds()
    }

    public separate(overlap: Rectangle, platform: ObservablePoint<any>) {
        if (overlap.width < overlap.height)
                {
                    if (this.x > platform.x)
                    {
                        this.x += overlap.width;

                    } else if (this.x < platform.x){

                        this.x -= overlap.width;
                    }

                } else{

                    if (this.y > platform.y)
                    {
                        this.y += overlap.height;

                        this.speed.y = 0;
                        this.canJump = false;

                    } else if (this.y < platform.y){

                        this.y -= overlap.height;
                        this.speed.y = 0;
                        this.canJump = true;
                    }

                }
    }

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
    }

}