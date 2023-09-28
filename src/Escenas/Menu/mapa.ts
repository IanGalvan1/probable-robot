import { /*NineSlicePlane,*/ Texture, Container, TilingSprite, Sprite } from "pixi.js";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { button } from "../../aplicaciones/button";
import { SceneManager } from "../SceneManager";
import { EscePuente } from "../Puente/EscePuente";
import { peatonal } from "../peatonbal/peatonal";
import { veinti } from "../veinti/veinti";

export class mapa extends SceneBase{

    public override update(): void {}

    private puente:button;

    private puentepng : Sprite;

    private peatonal:button;

    private peatonalpng: Sprite;

    // private monumento:button;

    private veintipng: Sprite;

    private plazamayo:button;


    private Todo : Container;

    // private panel : NineSlicePlane;

    // private medio: Graphics;

    private background: TilingSprite

    constructor()
    {
        super() 

        this.Todo = new Container;

        this.background = new TilingSprite(Texture.from("mapa"), SceneManager.WIDTH, SceneManager.HEIGHT);

        // this.background.scale.set(0.5,0.5);
        this.background.position.set(0,0)

        // this.panel = new NineSlicePlane(
        //     Texture.from("/objetos/fondo mapa.png"),
        //     35,35,35,35,
        // );


        this.puente = new button(
        Texture.from("/objetos/mapita.png"), 
        Texture.from("/objetos/mapita.png"), 
        Texture.from("/objetos/mapita.png")

        );

        this.puentepng = Sprite.from("puente");

        this.puentepng.width = 100;
        this.puentepng.height = 100;

        this.puentepng.position.x=1425;
        this.puentepng.position.y=155; 

        this.puente.buttonEvents.on("buttonClicked", this.onButtonPuente, this);

        this.puente.position.x=1425;
        this.puente.position.y=155; 



        this.peatonal = new button(
            Texture.from("/objetos/mapita.png"), 
            Texture.from("/objetos/mapita.png"), 
            Texture.from("/objetos/mapita.png")
    
            );
        
        this.peatonalpng = Sprite.from ("peatonal");

        this.peatonalpng.width = 100;
        this.peatonalpng.height = 100;

        this.peatonalpng.position.x=910;
        this.peatonalpng.position.y=205;
    
        this.peatonal.buttonEvents.on("buttonClicked", this.onButtonPeatonal, this);
    
        this.peatonal.position.x=910;
        this.peatonal.position.y=205;

        // this.monumento = new button(
        //     Texture.from("/objetos/boton largo.png"), 
        //     Texture.from("/objetos/boton largo.png"), 
        //     Texture.from("/objetos/boton apretao largoo.png")
    
        //     );
    
        //     this.monumento.buttonEvents.on("buttonClicked", this.onButtonMonumento, this);
        //     this.monumento.width=0.8;
    
        //     this.monumento.position.x=925;
        //     this.monumento.position.y=455;   

        this.plazamayo = new button(
            Texture.from("/objetos/mapita.png"), 
            Texture.from("/objetos/mapita.png"), 
            Texture.from("/objetos/mapita.png")
            );

            this.veintipng = Sprite.from ("laventi");

            this.veintipng.width = 100;
            this.veintipng.height = 100;

            this.veintipng.position.x=660;
            this.veintipng.position.y=480;
        
            this.plazamayo.buttonEvents.on("buttonClicked", this.onButtonMayo, this);
        
            this.plazamayo.position.x=660;
            this.plazamayo.position.y=480;

        // this.panel.width= SceneManager.WIDTH;
        // this.panel.height= SceneManager.HEIGHT;
        // this.panel.scale.set(2)

        // this.panel.position.x=880;
        // this.panel.position.y=150;


        this.addChild(this.background);
        


        this.Todo.addChild(this.peatonalpng);
        this.Todo.addChild(this.peatonal);

        this.Todo.addChild(this.puentepng);
        this.Todo.addChild(this.puente);

        this.Todo.addChild(this.veintipng);
        this.Todo.addChild(this.plazamayo);

        // this.Todo.addChild(this.monumento);

        
        // this.Todo.addChild(this.panel);

        this.addChild(this.Todo);
        // this.myText.position.x=931;
        this.Todo.position.x=-545;

        this.Todo.scale.x=1.5;
        this.Todo.scale.y=1.5;

    }

    private onButtonPuente():void{
        SceneManager.changeScene(new EscePuente)
    }
    private onButtonPeatonal():void{
        SceneManager.changeScene(new peatonal)
    }
    // private onButtonMonumento():void{
    //     SceneManager.changeScene(new EscePuente)
    // }
    private onButtonMayo():void{
        SceneManager.changeScene(new veinti)
    }


}