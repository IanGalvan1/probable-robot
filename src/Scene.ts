import { AnimatedSprite, Container, /* Graphics, Text,*/ Texture, NineSlicePlane, /*Sprite,*/ } from "pixi.js";
import { yoconpelucaCont } from "./yoconpelucaCont";

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

			//animacion basica

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
			brigadiercamina.animationSpeed = 0.10

			
			brigadiercamina.position.set(400, 200);
			brigadiercamina.scale.set(0.5, 0.5);

			this.addChild(brigadiercamina);

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

			const panel = new NineSlicePlane(
				Texture.from("panelgris"),
				35,35,35,35,
			);

			const check = new NineSlicePlane(
				Texture.from("check"),
				10,10,10,10,
			);

			const rectanguloverde1 = new NineSlicePlane(
				Texture.from("rectanguloverde1"),
				35,5,35,10,
			);

			const rectanguloverde2 = new NineSlicePlane(
				Texture.from("rectanguloverde2"),
				35,35,35,35,
			);

			const equis = new NineSlicePlane(
				Texture.from("equis"),
				10,10,10,10
			);
			
			this.addChild(panel);

			panel.width= 120;
			panel.height= 200;
			panel.scale.set(2)

			panel.position.x=880;
			panel.position.y=150;

			this.addChild(rectanguloverde1);

			rectanguloverde1.width=180;
			rectanguloverde1.height=77;

			rectanguloverde1.position.x=910;
			rectanguloverde1.position.y=449;

			this.addChild(check);

			check.width=60;
			check.height=60;

			check.position.x=1020;
			check.position.y=455;


			this.addChild(rectanguloverde2);

			rectanguloverde2.width=180;
			rectanguloverde2.height=77;

			rectanguloverde2.position.x=910;
			rectanguloverde2.position.y=180;

			this.addChild(equis);

			equis.width=50;
			equis.height=50;

			equis.position.x=1080;
			equis.position.y=130;

		}
}