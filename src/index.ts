import { Application, Assets, Ticker, } from 'pixi.js'
import { manifest } from './assets';

import { Keyboard } from './aplicaciones/Keyboard';
import { Estrella } from './personaje/Estrella';
// import { briga } from './personaje/brigadier';

export const WIDTH = 1920;
export const HEIGHT = 1080;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: WIDTH,
	height: HEIGHT,
});

Keyboard.initialize();

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


Assets.init({ manifest: manifest }).then(()=>{

	// Obtenemos todos los nombres de los bundles que tengamos en nuestro manifest
	const bundleIds =  manifest.bundles.map(bundle => bundle.name);

	// descargamos todos los bundles
	Assets.loadBundle(bundleIds).then(()=>{
		// recien aca tenemos todos los assets listos. Podemos abrir nuestra escena
	
			const myScene: Estrella = new Estrella;

			app.stage.addChild(myScene);

			Ticker.shared.add(function (deltaFrame){
				myScene.update(Ticker.shared.deltaMS, deltaFrame)
			
			})
			// const myWin: Win = new Win;

			// app.stage.addChild(myWin);

			// const brigadier: briga = new briga;

			// app.stage.addChild(brigadier);
	})
})

// Assets.addBundle("myAssets", assets); 

// Assets.loadBundle(["myAssets"]).then(() => {
// // Assets.load(["clampy", "ianpj", "gorro"]).then(()=>{
	
// 	console.log ("Hola mundo!"); 

// 	const myScene: Scene = new Scene;

// 	app.stage.addChild(myScene);

// });
