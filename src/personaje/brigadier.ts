import { AnimatedSprite, Container, Texture } from "pixi.js";

export class briga extends Container {

    constructor()
    {
        super()

        const brigadiercamina: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("brigadiercamina1"),
                Texture.from("brigadiercamina2"),
                Texture.from("brigadiercamina3"),
                Texture.from("brigadiercamina4")
            ],
            true
        );
        brigadiercamina.play();
        brigadiercamina.animationSpeed = 0.1

        
        brigadiercamina.position.set(400, 200);
        brigadiercamina.scale.set(0.5, 0.5);

        this.addChild(brigadiercamina);

    }
}