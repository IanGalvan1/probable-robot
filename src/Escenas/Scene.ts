import { Container, /* Graphics, Text, Texture, NineSlicePlane,*/ /*Sprite,*/ } from "pixi.js";
import { yoconpelucaCont } from "../personaje/yoconpelucaCont";

export class Scene extends Container {

        constructor()
        {
            super()

            const yoconpeluca: yoconpelucaCont = new yoconpelucaCont;

	

	        //modificar el padre
	        // yoconpeluca.scale.set(0.3);
	        // yoconpeluca.position.set(450,250);


	        yoconpeluca.scale.set(0.3);
	        yoconpeluca.position.set(640,360);
	        yoconpeluca.angle = (60);
	        yoconpeluca.rotation = (180);

	        //el rotation es mas importante, y si esta rotate+anlge queda en la misma posicion que si solo estuviera el rotate

	
	        //pa pone el gorro en el medio

    	    // const aux = gorro.parent.toLocal(new Point(640,360));
	        // gorro.position.x = aux.x;
	        // gorro.position.x = aux.y;

            this.addChild(yoconpeluca);

			/*

			//no croe que sirva de mucho pero ta bueno
			const myGraph: Graphics = new Graphics();
			
			myGraph.lineStyle({color:0XFF00FF, width: 10, alpha:1})
			myGraph.moveTo(650, 310);
			myGraph.lineTo(800, 450);
			myGraph.lineTo(800, 350);
			myGraph.lineTo(1000,350);
			myGraph.lineTo(1000, 250);
			myGraph.lineTo(800, 250);
			myGraph.lineTo(800, 150);
			myGraph.lineTo(650, 310);

			// myGraph.clear(); con esto se borra

			// myGraph.lineStyle({color:0XFF00FF, width: 10, alpha:1})
			// myGraph.beginFill(0x00ff00,1);
			// myGraph.drawCircle(0,0,100);
			// myGraph.endFill();

			// myGraph.drawCircle(50,50,100)

			myGraph.position.set(100, 100);

			this.addChild(myGraph);

			*/
			
			//texto

			/*
			const myText: Text = new Text ("Estrella platinada, El mundoooo", {fontSize:18, fill: 0xFF0010, fontFamily:"Comic Sans MS"});
			
			// myText.text= "otra cosa";
			myText.position.x = 100; //posicion nomas
			// myText.angle = 75; //angulo
			myText.scale.set(5); //escala, se puede romper todo
			this.addChild(myText);

			*/

			//Nine-Slce Plane

			// const panel = Sprite.from("baldosa");

		}
}