import { Container, Text} from "pixi.js";

import { Keyboard } from "../../aplicaciones/Keyboard";
import { briga } from "../../personaje/brigadier";


export class Scene extends Container {


        constructor()
        {
            super()

			const myText: Text = new Text ("Apretar Enter para Iniciar", {fontSize:35, fill: 0x73cd4b, fontFamily:"Bauhaus 93",});

			this.addChild(myText);

			Keyboard.down.on("KeyA", this.onKeyB, this);
			
		}

		private onKeyB():void{

			console.log("si apretaste", this);

			const escena: briga = new briga

			this.addChild(escena);

			console.log("arranco", this);

			

			
		}

	
}