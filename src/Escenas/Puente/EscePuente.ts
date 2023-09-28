import { Container, NineSlicePlane, Sprite, Text, Texture, TilingSprite,} from "pixi.js";
import { checkCollision } from "../../aplicaciones/IHitbox";
import { Platform } from "./Platform";
import { sound } from "@pixi/sound";
import { briga } from "../../personaje/brigadier";
import { Iupdateable } from "../../aplicaciones/Iupdateable";
import { button } from "../../aplicaciones/button";
import { Floor } from "./Floor";
import { Top } from "./top";
import { SceneManager } from "../SceneManager";
import { VariablesCompartidas } from "../../aplicaciones/VariablesComparidas";
import { mapa } from "../Menu/mapa";



export class EscePuente extends Container implements Iupdateable {

    private OpenMapa : button;

    private PlayerA: briga;
    
    private abuelasa:button;

    private abu: Sprite;

    private baldosa: NineSlicePlane;

    private equis: button;

    private hit:Platform;

    private floor: Floor;

    private top: Top;

    private world:Container;
    
    private texto:Container;

    private background: TilingSprite;

    private text: Text;

    private anunciado: Text;



    // private gameSpeed: number = 200;

    constructor()
    {
        super()


        // --------------------------------------

        this.floor = new Floor;

        this.top = new Top;

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

        this.abu = Sprite.from("./personajes/abuela.png");
        this.abu.position.set(1800, 680);
        this.abu.scale.set(-1.5, 1.5);

        this.text = new Text("Abuelita Estela", {fontSize:65, fill: 0x000000, fontFamily:"Bauhaus 93",});

        this.text.position.x= 200;
        this.text.position.y= 800;

        this.texto = new Container();

        this.texto.addChild(this.baldosa);
        this.texto.addChild(this.equis);

        this.texto.addChild(this.abu);

        this.texto.addChild(this.text);
        

// -----------------------------------

    this.anunciado = new Text(
        "Hola nene, ayudame un segundito. \n ¿No me podrias traer mi costurero, porfavor?",
        {fontSize:65,
        fill: 0x000000,
        fontFamily:"Bauhaus 93",
    });
    this.anunciado.width= 1200;
    this.anunciado.position.x= 50;
    this.anunciado.position.y= 900;

// -----------------------------------

        this.abuelasa = new button(
            Texture.from("/personajes/abuela.png"),
            Texture.from("/personajes/abuela3.png"),
            Texture.from("/personajes/abuela2.png"),
        );
        
        this.hit = new Platform;

        this.world = new Container();
        
        this.PlayerA = new briga();

        this.PlayerA.position.set(0, 0);
        
        this.background = new TilingSprite(Texture.from("puente"), SceneManager.WIDTH, SceneManager.HEIGHT);
        
        this.world.addChild(this.floor);
        this.world.addChild(this.top);
        this.addChild(this.background);

        this.world.addChild(this.hit);
        
        this.world.addChild(this.abuelasa);
        
        this.world.addChild(this.PlayerA)

        this.abuelasa.buttonEvents.on("buttonClicked", this.onButtonClickTexto,this)

        this.abuelasa.position.set(850, 550);
        this.abuelasa.scale.set(0.5, 0.4);

        this.hit.position.set(850, 550);
        this.hit.scale.set(0.5, 0.4);

        this.addChild(this.world);

        
// -----------------------------------



        this.OpenMapa = new button(
            Texture.from("/objetos/abrir mapa.png"), 
            Texture.from("/objetos/abrir mapa.png"), 
            Texture.from("/objetos/abrir mapa apretado.png")

            );
            this.OpenMapa.buttonEvents.on("buttonClicked", this.onButtonMapa, this);
            this.OpenMapa.scale.set(2.5,2.5);

            this.OpenMapa.position.x=15;
            this.OpenMapa.position.y=15;

        this.addChild(this.OpenMapa);


    }


    private onButtonClickTexto():void{

        if (VariablesCompartidas.vieja <= 0){
            sound.play("talk", {volume:0.5, singleInstance:true} );

            this.addChild(this.texto);
            VariablesCompartidas.vieja = 1;
            console.log("termo =",VariablesCompartidas.vieja )
            this.addChild(this.anunciado);

        } else{

            if (VariablesCompartidas.vieja == 1 && VariablesCompartidas.masita == 0){

                this.addChild(this.texto);

                sound.play("talk", {volume:0.5, singleInstance:true} );

                this.anunciado = new Text(
                    "Dale pibe, sos re contra joven \n traele el costurero a la nona",
                    {fontSize:65,
                    fill: 0x000000,
                    fontFamily:"Bauhaus 93",
                });
                this.anunciado.width= 1200;
                this.anunciado.position.x= 50;
                this.anunciado.position.y= 900;
                this.addChild(this.anunciado)

            } else if (VariablesCompartidas.vieja == 1 && VariablesCompartidas.masita == 1){
            
                sound.play("talk", {volume:0.5, singleInstance:true} );

                this.addChild(this.texto);

                this.anunciado = new Text(
                    "Ahi esta! \n Muchas gracias nene, toma un plimplaf",
                    {fontSize:65,
                    fill: 0x000000,
                    fontFamily:"Bauhaus 93",
                });
                this.anunciado.width= 1200;
                this.anunciado.position.x= 50;
                this.anunciado.position.y= 900;

                this.addChild(this.anunciado)
            }
        }
        VariablesCompartidas.vieja==0;
}

    
    private onButtonClickClose():void{
        if (VariablesCompartidas.vieja <= 0 ){
            this.removeChild(this.texto);
            this.removeChild(this.anunciado);

            sound.stop("talk");


        } else{

            this.removeChild(this.texto);
            this.removeChild(this.anunciado);

            sound.stop("talk");


            if (VariablesCompartidas.vieja == 1 && VariablesCompartidas.masita == 1){
                this.removeChild(this.texto);
                this.removeChild(this.anunciado);

                sound.stop("talk");


            } else if (VariablesCompartidas.vieja == 1 && VariablesCompartidas.masita == 1){
                this.removeChild(this.texto);
                this.removeChild(this.anunciado);

                sound.stop("talk");

            }

        }

    }

    public update(deltaTime: number, _deltaFrame: number): void {
        this.PlayerA.update(deltaTime);

            const overlapfloor = checkCollision(this.PlayerA, this.floor);

            if (overlapfloor != null)
            {
                this.PlayerA.separatefloor(overlapfloor, this.floor.position);
                

            }
            const overlaptop = checkCollision(this.PlayerA, this.top);

            if (overlaptop != null)
            {
                this.PlayerA.separatefloor(overlaptop, this.top.position);
                
            }
            


        if (this.PlayerA.x > SceneManager.WIDTH)
        {
            this.PlayerA.x = SceneManager.WIDTH;

        }else if (this.PlayerA.x < 0)
        {
            this.PlayerA.x = 0;

        }
        
    }

    private onButtonMapa():void{
        SceneManager.changeScene(new mapa)
    }
    
}
