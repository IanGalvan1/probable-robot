import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


Assets.add ("ianpj", "./IanPj.png");
Assets.add ("clampy", "./clampy.png");

Assets.load(["clampy", "ianpj"]).then(()=>{

	const clampy: Sprite = Sprite.from("clampy");
	
	console.log ("Hola mundo!", clampy.width, clampy.height);
	
	clampy.anchor.set(0.5);
	
	clampy.x = 300;
	clampy.y = 300;
	
	app.stage.addChild(clampy);

});

