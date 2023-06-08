import { Application, Assets, Container, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720,
});

window.addEventListener("resize", ()=>{
	console.log("resolucion")
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const gameWidth = Math.round (app.screen.width * scale);
	const gameHeight = Math.round (app.screen.height * scale);

	const marginHorizontal = Math.floor( (window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor( (window.innerHeight - gameHeight) / 2);

	app.view.style!.width = gameWidth + "px";
	app.view.style!.height = gameHeight + "px";

	(app.view.style as any).marginLeft = marginHorizontal + "px";
	(app.view.style as any).marginRight = marginHorizontal + "px";

	(app.view.style as any).marginTop = marginVertical + "px";
	(app.view.style as any).marginBottom = marginVertical + "px";
});

window.dispatchEvent(new Event ("resolucion"));


Assets.add ("ianpj", "./IanPj.png"); 
Assets.add ("clampy", "./clampy.png");
Assets.add ("gorro", "./gorro.png");

Assets.load(["clampy", "ianpj", "gorro"]).then(()=>{

	const ian: Sprite = Sprite.from("ianpj");

	
	console.log ("Hola mundo!", ian.width, ian.height); 
	
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

	const yoconpeluca: Container = new Container;

	
	yoconpeluca.addChild(ian);
	yoconpeluca.addChild(gorro);

	//modificar el padre
	// yoconpeluca.scale.set(0.3);
	// yoconpeluca.position.set(450,250);


	yoconpeluca.scale.set(0.3);
	yoconpeluca.position.set(640,360);
	yoconpeluca.angle = (60);
	yoconpeluca.rotation = (180);

	//el rotation es mas importante, y si esta rotate+anlge queda en la misma posicion que si solo estuviera el rotate

	console.log (gorro.toGlobal(new Point ()))

	//pa pone el gorro en el medio

	// const aux = gorro.parent.toLocal(new Point(640,360));
	// gorro.position.x = aux.x;
	// gorro.position.x = aux.y;

	app.stage.addChild(yoconpeluca);
});

