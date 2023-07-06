import { /*AnimatedSprite,*/ Container, Sprite, /*Texture*/ } from "pixi.js";
import { Iupdateable } from "../aplicaciones/Iupdateable";
import { PhysicsContainer } from "../aplicaciones/PhysicsContainer";
// import { HEIGHT, WIDTH } from "..";


export class Estrella extends Container implements Iupdateable {

    // private star: AnimatedSprite;
    // private PhysEs: PhysicsContainer;


    private tele1 = 1000;
    private tele2 = 600;

    private DVD = new Sprite;
    private Physdvd: PhysicsContainer;

    constructor()
    {
        super()

        // this.star = new AnimatedSprite(
        //     [
        //         Texture.from("estrella1"),
        //         Texture.from("estrella2"),
        //         Texture.from("estrella3"),
        //         Texture.from("estrella4"),
        //         Texture.from("estrella5")
        //     ],
        //     true
        // );
        // this.star.play();
        // this.star.anchor.set(0.5, 0.5);
        // this.star.animationSpeed = 0.08

        
        // // this.brigadierfrente.position.set(400, 200);
        // this.star.position.set(0, 0);
        // this.star.scale.set(5, 5);

        this.Physdvd = new PhysicsContainer();
        this.DVD.anchor.set(1, 1);
        this.Physdvd.speed.x = 500;
        this.Physdvd.speed.y = 0;
        this.Physdvd.acceleration.y= 150;

        this.DVD = Sprite.from("DVD")
        
        this.addChild(this.DVD);

        this.addChild(this.Physdvd);

        this.Physdvd.addChild(this.DVD);



        // this.PhysEs = new PhysicsContainer();
        // this.PhysEs.speed.x = 500;
        // this.PhysEs.speed.y = 0;
        // this.PhysEs.acceleration.y= 150;
        
        // this.addChild(this.star);

        // this.addChild(this.PhysEs);

        // this.PhysEs.addChild(this.star);


    }
    public update(deltaTime: number, _deltaFrame: number): void {
        // this.star.update(deltaFrame);

        const dt = deltaTime /1000;

        // this.PhysEs.update(dt);
        this.Physdvd.update(dt);

        // if (this.PhysEs.x > WIDTH)
        // {
        //     this.PhysEs.x = WIDTH;
        //     this.PhysEs.speed.x = Math.abs(this.PhysEs.speed.x) * -1;

        //     this.star.tint = 0xFF00FF;
        // }else if (this.PhysEs.x < 0)
        // {
        //     this.PhysEs.x = 0;
        //     this.PhysEs.speed.x = Math.abs(this.PhysEs.speed.x);

        //     this.star.tint = 0x0000FF;
        // }


        // if (this.PhysEs.y > HEIGHT)
        // {
        //     this.PhysEs.y = HEIGHT;
        //     this.PhysEs.speed.y = -500 * Math.random();

        //     this.star.tint = 0x00FF00;
        // }
        
        if (this.Physdvd.x > this.tele1)
        {
            this.Physdvd.x = this.tele1;
            this.Physdvd.speed.x = Math.abs(this.Physdvd.speed.x) * -1;

            this.DVD.tint = 0xFF00FF;
        }else if (this.Physdvd.x < 0)
        {
            this.Physdvd.x = 0;
            this.Physdvd.speed.x = Math.abs(this.Physdvd.speed.x);

            this.DVD.tint = 0x0000FF;
        }


        if (this.Physdvd.y > this.tele2)
        {
            this.Physdvd.y = this.tele2;
            this.Physdvd.speed.y = -500;

            this.DVD.tint = 0x00FF00;
        }else if (this.Physdvd.y < 0)
        {
            this.Physdvd.y = 0;
            this.Physdvd.speed.y = Math.abs(this.Physdvd.speed.y);

            this.DVD.tint = 0x00FFFF;
        }



    }
}
