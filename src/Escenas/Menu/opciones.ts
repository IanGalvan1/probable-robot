import { NineSlicePlane, Texture, Text, Container, TilingSprite } from "pixi.js";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { button } from "../../aplicaciones/button";
import { SceneManager } from "../SceneManager";
import { Inicio } from "./MenuA";

export class Config extends SceneBase{

    public override update(): void {}

    private Button : button;

    private myText:Text;

    private comienzo:Text;

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
        Texture.from("/objetos/CERRAR.png"), 
        Texture.from("/objetos/CERRAR.png"), 
        Texture.from("/objetos/CERRAR.png")
        );

        this.Button.buttonEvents.on("buttonClicked", this.onButtonClick, this);
        this.Button.scale.set(0.3);

        this.Button.position.x=1300;
        this.Button.position.y=100;

        this.myText = new Text("Configuracion:\n No busques mucho porque \n no existen las configuraciones", {fontSize:35, fill: 0x23cd4b, fontFamily:"Bauhaus 93"});

        this.comienzo = new Text("Controles: \n para moverse: \n --Flechas de direccion \n --Botones del Mouse", {fontSize:35, fill: 0x23cd4b, fontFamily:"Bauhaus 93"});
        
        this.panel.width= 800;
        this.panel.height= 600;

        this.panel.position.x=600;
        this.panel.position.y=80;

        this.myText.position.x=631;
        this.myText.position.y=165;

        this.comienzo.position.x=634;
        this.comienzo.position.y=360;

        this.Todo.addChild(this.background);
        this.Todo.addChild(this.panel);
        this.Todo.addChild(this.Button);
        this.Todo.addChild(this.myText);
        this.Todo.addChild(this.comienzo);

        this.addChild(this.Todo);
        

        // this.myText.position.x=931;
        this.Todo.position.x=-545;

        this.Todo.scale.x=1.5;
        this.Todo.scale.y=1.5;

    }

    private onButtonClick():void{
        SceneManager.changeScene(new Inicio)
    }
}