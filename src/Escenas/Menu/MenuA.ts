import { NineSlicePlane, Texture, Text, Container, TilingSprite } from "pixi.js";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { button } from "../../aplicaciones/button";
import { SceneManager } from "../SceneManager";
import { EscePuente } from "../Puente/EscePuente";

export class Inicio extends SceneBase{

    public override update(): void {}

    private Button : button;

    private rectanguloverde1 : NineSlicePlane;

    private myText:Text;

    private texts:Text;

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

        this.Button.buttonEvents.on("buttonClicked", this.onButtonClick, this);
        this.Button.width=0.8;

        this.Button.position.x=925;
        this.Button.position.y=455;

        this.rectanguloverde1 = new NineSlicePlane(
            Texture.from("/objetos/green_panel.png"),
            35,5,35,10,
        );

        this.myText = new Text("Brigadier\nEl juego", {fontSize:35, fill: 0x73cd4b, fontFamily:"Bauhaus 93"});


        this.texts = new Text("Comienzo", {fontSize:28, fill: 0x23cd4b, fontFamily:"Bauhaus 93"});
        
        this.panel.width= 120;
        this.panel.height= 200;
        this.panel.scale.set(2)

        this.panel.position.x=880;
        this.panel.position.y=150;

        this.rectanguloverde1.width=180;
        this.rectanguloverde1.height=277;

        this.rectanguloverde1.position.x=910;
        this.rectanguloverde1.position.y=249;

        this.myText.position.x=931;
        this.myText.position.y=165;

        this.texts.position.x=934;
        this.texts.position.y=460;

        this.Todo.addChild(this.background);
        this.Todo.addChild(this.panel);
        this.Todo.addChild(this.rectanguloverde1);
        this.Todo.addChild(this.Button);
        this.Todo.addChild(this.myText);
        this.Todo.addChild(this.texts);

        this.addChild(this.Todo);
        

        // this.myText.position.x=931;
        this.Todo.position.x=-545;

        this.Todo.scale.x=1.5;
        this.Todo.scale.y=1.5;

    }

    private onButtonClick():void{
        SceneManager.changeScene(new EscePuente)
    }

}