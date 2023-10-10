import { /*NineSlicePlane,*/ Texture, Text, Container, TilingSprite, Sprite, NineSlicePlane } from "pixi.js";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { button } from "../../aplicaciones/button";
import { SceneManager } from "../SceneManager";
import { EscePuente } from "../Puente/EscePuente";
import { peatonal } from "../peatonbal/peatonal";
import { veinti } from "../veinti/veinti";
import { VariablesCompartidas } from "../../aplicaciones/VariablesComparidas";
import { sound } from "@pixi/sound";
import { final } from "./final";

export class mapa extends SceneBase{

    public override update(): void {}

    private puente:button;

    private FINAL: button;

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

    private baldosa: NineSlicePlane;
    private equis: button;
    private texto:Container;
    private botones:Container;
    private anunciado: Text;

    private sis: Text;
    private non: Text;

    private Button : button;

    private Button2 : button;

    constructor()
    {
        super() 

        sound.stop ("goku");

        this.baldosa = new NineSlicePlane(
            Texture.from("./objetos/baldosa.png"),
            35,35,35,35,
            );

        this.baldosa.width= SceneManager.WIDTH;
        this.baldosa.height=400;
        this.baldosa.position.x = 0;
        this.baldosa.position.y = 800;

            this.equis = new button(
                Texture.from("./objetos/CERRAR.png"),
                Texture.from("./objetos/CERRAR.png"),
                Texture.from("./objetos/CERRAR.png"),
            );

        this.equis.width= 100;
        this.equis.height= 100;
        this.equis.position.x = 1700;
        this.equis.position.y = 810;

        this.equis.buttonEvents.on("buttonClicked", this.onButtonClickClose,this)

        this.anunciado = new Text(
            "Ya has finalizado tu recorrido por \n esta nueva era??",{fontSize:65,fill: 0x000000,fontFamily:"Comic Sans MS",});
        this.anunciado.width= 1200;
        this.anunciado.position.x= 50;
        this.anunciado.position.y= 900;



        this.Button = new button(
            Texture.from("/objetos/boton largo.png"), 
            Texture.from("/objetos/boton largo.png"), 
            Texture.from("/objetos/boton apretao largoo.png")
            );

        this.sis = new Text(
            "       SI",{fontSize:35,fill:
                0x23cd4b,fontFamily:"Comic Sans MS",});
        this.anunciado.position.x= 1455;
        this.anunciado.position.y= 960;

        this.Button.addChild(this.sis);
    
        this.Button2 = new button(
        Texture.from("/objetos/boton largo.png"), 
        Texture.from("/objetos/boton largo.png"), 
        Texture.from("/objetos/boton apretao largoo.png")
        );

        this.non = new Text(
            "       NO",{fontSize:35,fill:
                0x23cd4b,fontFamily:"Comic Sans MS",});
        this.anunciado.position.x= 50;
        this.anunciado.position.y= 850;

        this.Button2.addChild(this.non);

    
        this.Button.buttonEvents.on("buttonClicked", this.onButtonfinal2, this);
    
        this.Button.position.x=1355;
        this.Button.position.y=960;
        // this.Button.width=150;
    
        this.Button2.buttonEvents.on("buttonClicked", this.onButtonfinal3, this);
    
        this.Button2.position.x=1355;
        this.Button2.position.y=840;




        this.texto = new Container();
        this.botones = new Container();

        this.texto.addChild(this.baldosa);
        this.texto.addChild(this.equis);

        this.botones.addChild(this.Button);
        this.botones.addChild(this.Button2);

        /* --------------------------------------------------- */

        this.Todo = new Container;

        this.background = new TilingSprite(Texture.from("mapa"), SceneManager.WIDTH, SceneManager.HEIGHT);

        // this.background.scale.set(0.5,0.5);
        this.background.position.set(0,0)

        // this.panel = new NineSlicePlane(
        //     Texture.from("/objetos/fondo mapa.png"),
        //     35,35,35,35,
        // );

        this.FINAL = new button(
            Texture.from("/objetos/circulogris.png"),
            Texture.from("/objetos/circulogris.png"),
            Texture.from("/objetos/circulogris.png"),
        );

        this.FINAL.position.x=100;
        this.FINAL.position.y=100;
        this.FINAL.scale.set(1.5);
        

        this.FINAL.buttonEvents.on("buttonClicked", this.onButtonFinal, this);

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
        this.addChild(this.FINAL);
        


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

    private onButtonFinal():void{

        this.addChild(this.texto);
        this.addChild(this.anunciado);
        this.addChild(this.botones);

    }

    private onButtonfinal2():void{
        if (
            VariablesCompartidas.textopluspela==1&&
            VariablesCompartidas.textoplusvieja==1
        ){
            this.removeChild(this.anunciado);
            this.removeChild(this.botones);

            this.anunciado = new Text(
                "Perfecto, ahora podras volver \n a tu tiempo original. Buen viaje",
                {fontSize:65,
                fill: 0x000000,
                fontFamily:"Comic Sans MS",
            });
            this.anunciado.width= 1200;
            this.anunciado.position.x= 50;
            this.anunciado.position.y= 900;
            this.addChild(this.anunciado)

            SceneManager.changeScene(new final)

        } else {
            this.removeChild(this.anunciado);
            this.removeChild(this.botones);

            this.anunciado = new Text(
                "Todavia te falta terminal algunas tareas. \n Cuando termines eso podras volver",
                {fontSize:65,
                fill: 0x000000,
                fontFamily:"Comic Sans MS",
            });
            this.anunciado.width= 1200;
            this.anunciado.position.x= 50;
            this.anunciado.position.y= 900;
            this.addChild(this.anunciado)
        }
    }

    private onButtonfinal3():void{
        this.removeChild(this.anunciado);
        this.removeChild(this.botones);

        this.anunciado = new Text(
            "Puedes volver luego de completar tus tareas\n Te estare esperando!",
            {fontSize:65,
            fill: 0x000000,
            fontFamily:"Comic Sans MS",
        });
        this.anunciado.width= 1200;
        this.anunciado.position.x= 50;
        this.anunciado.position.y= 900;
        this.addChild(this.anunciado)
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

    private onButtonClickClose():void{
        this.removeChild(this.texto);
        this.removeChild(this.anunciado);
    }

}