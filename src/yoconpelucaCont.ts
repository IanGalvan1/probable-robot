import { Container, Sprite } from "pixi.js";

export class yoconpelucaCont extends Container {

    constructor (){
        super()

        
        const ian: Sprite = Sprite.from("ianpj");
        // ian.anchor.set(0.5);
    
        //  posicion
        // ian.x = 500;
        // ian.y = 300;
    
        //escala
        // ian.scale.x = 0.5;
        // ian.scale.y = 0.5;
    
        const gorro: Sprite = Sprite.from("gorro");
    
        gorro.scale.set(1,0.7) // pimero X, despues Y
        gorro.position.set(-80,-15) //primero va X, despues Y
        
        this.addChild(ian); /*(this busca el contexto)*/
        this.addChild(gorro);


    }


}

