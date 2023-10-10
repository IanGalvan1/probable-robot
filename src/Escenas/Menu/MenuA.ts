import { NineSlicePlane, Texture, Text, Container, TilingSprite } from "pixi.js";
import { exit} from "@tauri-apps/api/process";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { button } from "../../aplicaciones/button";
import { SceneManager } from "../SceneManager";
// import { mapa } from "./mapa";
import { Config } from "./opciones";
import { audio } from "./inicio";

export class Inicio extends SceneBase{

    public override update(): void {}

    private Button : button;

    private Button2 : button;

    private Button3 : button;
    

    private rectanguloverde1 : NineSlicePlane;

    private myText:Text;

    private comienzo:Text;

    private options:Text;

    private salida:Text;

    private Todo : Container;

    private panel : NineSlicePlane;

    // private medio: Graphics;

    private background: TilingSprite

    constructor()
    {
        super() 

        this.Todo = new Container;

        this.background = new TilingSprite(Texture.from("brigadeirou"), SceneManager.WIDTH, SceneManager.HEIGHT);

        this.background.position.y=-180;
        
        this.addChild(this.background);

        this.panel = new NineSlicePlane(
            Texture.from("/objetos/grey_panel.png"),
            35,35,35,35,
        );

        this.Button = new button(
        Texture.from("/objetos/boton largo.png"), 
        Texture.from("/objetos/boton largo.png"), 
        Texture.from("/objetos/boton apretao largoo.png")
        );

        this.Button2 = new button(
        Texture.from("/objetos/boton largo.png"), 
        Texture.from("/objetos/boton largo.png"), 
        Texture.from("/objetos/boton apretao largoo.png")
        );

        this.Button3 = new button(
        Texture.from("/objetos/boton largo.png"), 
        Texture.from("/objetos/boton largo.png"), 
        Texture.from("/objetos/boton apretao largoo.png")
        );
        
        this.Button3.buttonEvents.on("buttonClicked", this.onButtonClick, this);
        // this.Button.width=10;

        this.Button3.position.x=905;
        this.Button3.position.y=455;

        this.Button2.buttonEvents.on("buttonClicked", this.onButtonClickoptions, this);
        // this.Button2.width=10;

        this.Button2.position.x=905;
        this.Button2.position.y=395;

        this.Button.buttonEvents.on("buttonClicked", this.onButtonClickclose, this);

        this.Button.position.x=905;
        this.Button.position.y=335;

        this.rectanguloverde1 = new NineSlicePlane(
            Texture.from("/objetos/green_panel.png"),
            35,5,35,10,
        );

        this.myText = new Text("Brigadier\nEl juego", {align: "center",fontSize:35, fill: 0x73cd4b, fontFamily:"Comic Sans MS"});


        this.comienzo = new Text("Comienzo", {fontSize:28, fill: 0x23cd4b, fontFamily:"Comic Sans MS"});

        this.options = new Text("Opciones", {fontSize:28, fill: 0x23cd4b, fontFamily:"Comic Sans MS"});

        this.salida = new Text("Salir", {fontSize:28, fill: 0x23cd4b, fontFamily:"Comic Sans MS"});
        
        this.panel.width= 120;
        this.panel.height= 200;
        this.panel.scale.set(2)

        this.panel.position.x=880;
        this.panel.position.y=150;

        this.rectanguloverde1.width=180;
        this.rectanguloverde1.height=227;

        this.rectanguloverde1.position.x=910;
        this.rectanguloverde1.position.y=289;

        this.myText.position.x=921;
        this.myText.position.y=165;

        this.salida.position.x=934;
        this.salida.position.y=460;

        this.options.position.x=934;
        this.options.position.y=400;

        this.comienzo.position.x=934;
        this.comienzo.position.y=340;

        this.Todo.addChild(this.background);
        this.Todo.addChild(this.panel);
        this.Todo.addChild(this.rectanguloverde1);
        this.Todo.addChild(this.Button);
        this.Todo.addChild(this.myText);
        this.Todo.addChild(this.comienzo);
        this.Todo.addChild(this.Button2);
        this.Todo.addChild(this.options);
        this.Todo.addChild(this.Button3);
        this.Todo.addChild(this.salida);

        this.addChild(this.Todo);
        

        // this.myText.position.x=931;
        this.Todo.position.x=-545;

        this.Todo.scale.x=1.5;
        this.Todo.scale.y=1.5;

    }

    private onButtonClick():void{
        SceneManager.changeScene(new audio)
    }

    private onButtonClickoptions():void{
        SceneManager.changeScene(new Config)

    }

    private onButtonClickclose():void{

        exit();

    }


}