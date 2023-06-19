import { AnimatedSprite, Container, /* Graphics,*/ Text, Texture, NineSlicePlane, /*Sprite,*/ } from "pixi.js";
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

									//Cartel de Win Tarea

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

			const star = new NineSlicePlane(
				Texture.from("estrella"),
				0,0,0,0,
				

			);
			const star1 = new NineSlicePlane(
				Texture.from("estrella"),
				0,0,0,0,
			);
			const diamante = new NineSlicePlane(
				Texture.from("diamante"),
				0,0,0,0,
			);

			const starvacia = new NineSlicePlane(
				Texture.from("estrellavacia"),
				0,0,0,0,
			);

			const yen = new NineSlicePlane(
				Texture.from("yen"),
				0,0,0,0,
			);

			const myPoint: Text = new Text
			("20", {fontSize:34, fill: 0x000000, fontFamily:"Bauhaus 93"});

			const myText: Text = new Text
			("GANASTE", {fontSize:35, fill: 0x73cd4b, fontFamily:"Bauhaus 93"});
			
			const danceweed: AnimatedSprite = new AnimatedSprite(
				[
					Texture.from("dance1"),
					Texture.from("dance2"),
					Texture.from("dance3"),
					Texture.from("dance4"),
					Texture.from("dance5"),
					Texture.from("dance5"),
					Texture.from("dance4"),
					Texture.from("dance3"),
					Texture.from("dance2"),
					Texture.from("dance1"),
				],
				true
			);
			danceweed.play();
			danceweed.animationSpeed = 0.09
			
			danceweed.position.set(1020, 360);
			danceweed.scale.set(0.45, 0.45);
			
			

			this.addChild(panel);

			panel.width= 120;
			panel.height= 200;
			panel.scale.set(2)

			panel.position.x=880;
			panel.position.y=150;

			this.addChild(danceweed);

			this.addChild(rectanguloverde1);

			rectanguloverde1.width=180;
			rectanguloverde1.height=77;

			rectanguloverde1.position.x=910;
			rectanguloverde1.position.y=449;

			this.addChild(myPoint);

			myPoint.position.x=970;
			myPoint.position.y=462;

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

			this.addChild(star);

			star.width=35;
			star.height=35;
			star.scale.set(2);

			star.position.x=972;
			star.position.y=280;

			this.addChild(starvacia);

			starvacia.width=30;
			starvacia.height=30;
			starvacia.scale.set(2);

			starvacia.position.x=1030;
			starvacia.position.y=315;
			starvacia.angle= -25;

			this.addChild(star1);

			star1.width=30;
			star1.height=30;
			star1.scale.set(2);

			star1.position.x=930;
			star1.position.y=290;
			star1.angle = 25;

			this.addChild(diamante);

			diamante.width=30;
			diamante.height=30;
			diamante.scale.set(2);

			diamante.position.x=940;
			diamante.position.y=370;

			this.addChild(yen);

			yen.width=30;
			yen.height=30;
			yen.scale.set(1.5);

			yen.position.x=920;
			yen.position.y=458;
			
			
			this.addChild(myText);

			myText.position.x=931;
			myText.position.y=195;



		}
}