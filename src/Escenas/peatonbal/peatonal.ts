import { Container, NineSlicePlane, Sprite, Text, Texture, TilingSprite,} from "pixi.js";
import { checkCollision } from "../../aplicaciones/IHitbox";
import { SceneManager } from "../SceneManager";
import { sound } from "@pixi/sound";
import { briga } from "../../personaje/brigadier";
import { Iupdateable } from "../../aplicaciones/Iupdateable";
import { button } from "../../aplicaciones/button";
import { Floor } from "./Floor";
import { Top } from "./top";
import { Wall } from "./walls";
import { VariablesCompartidas } from "../../aplicaciones/VariablesComparidas";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { mapa } from "../Menu/mapa";


export class peatonal extends SceneBase implements Iupdateable {

    private OpenMapa : button;

    private masitas: button;

    private PlayerA: briga;
    
    private pelado:button;

    private pela: Sprite;

    private baldosa: NineSlicePlane;

    private equis: button;

    private floor: Floor;

    private top: Top;

    private wals: Wall;

    private wals2: Wall;
    
    private world:Container;
    
    private texto:Container;

    private background: TilingSprite;

    private text: Text;

    private anunciado: Text;


    constructor()
    {
        super()


        // --------------------------------------

        this.floor = new Floor;

        this.top = new Top;

        this.wals = new Wall;

        this.wals2 = new Wall;

        this.wals2.x = 2080;
        this.wals2.y = 1080;
        this.wals2.angle = 180;

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

        this.pela = Sprite.from("/personajes/pelao.png");
        this.pela.position.set(1200, 650);
        this.pela.scale.set(2, 2);

        this.text = new Text("Señor calvo (si, es su apellido)", {fontSize:65, fill: 0x000000, fontFamily:"Comic Sans MS",});

        this.text.position.x= 200;
        this.text.position.y= 800;

        this.texto = new Container();

        this.texto.addChild(this.baldosa);
        this.texto.addChild(this.equis);

        this.texto.addChild(this.pela);

        this.texto.addChild(this.text);
        

// -----------------------------------

    this.anunciado = new Text(
        "Che pibe, querio mates pero no tengo mi termo. \n ¿Me lo traes? lo perdo por ahi, gracias viejo",
        {fontSize:65,
        fill: 0x000000,
        fontFamily:"Comic Sans MS",
    });
    this.anunciado.width= 1200;
    this.anunciado.position.x= 50;
    this.anunciado.position.y= 900;

// -----------------------------------

        this.pelado = new button(
            Texture.from("/personajes/pelao.png"),
            Texture.from("/personajes/pelao3.png"),
            Texture.from("/personajes/pelao2.png"),
        );
        
        this.world = new Container();
        
        this.PlayerA = new briga();

        this.PlayerA.position.set(600, 0);
        
        this.background = new TilingSprite(Texture.from("peatonal"), SceneManager.WIDTH, SceneManager.HEIGHT);
        
        this.world.addChild(this.floor);
        this.world.addChild(this.top);
        this.world.addChild(this.wals);
        this.world.addChild(this.wals2);
        this.addChild(this.background);
        
        this.world.addChild(this.pelado);
        
        this.world.addChild(this.PlayerA);

        this.pelado.buttonEvents.on("buttonClicked", this.onButtonClickTexto,this)

        this.pelado.position.set(850, 550);
        this.pelado.scale.set(0.5, 0.4);

        
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

        // this.termo.position.set(378, 800);
        // this.termo.scale.set(0.2, 0.2);

        // this.termo.buttonEvents.on("buttonClicked", this.onButtonClickTextoEstanli,this)



        // this.termo = new button(
        //     Texture.from("/objetos/estanli.png"),
        //     Texture.from("/objetos/estanli3.png"),
        //     Texture.from("/objetos/estanli2.png"),
        // );


        // this.termo.position.set(378, 800);
        // this.termo.scale.set(0.2, 0.2);

        // this.termo.buttonEvents.on("buttonClicked", this.onButtonClickTextoEstanli,this)
        this.masitas = new button(
            Texture.from("/objetos/galletas-danesas.png"),
            Texture.from("/objetos/galletas-danesas2.png"),
            Texture.from("/objetos/galletas-danesas3.png"),
        );

        this.addChild(this.OpenMapa);
        
        this.masitas.position.set(378, 800);
        this.masitas.scale.set(0.2, 0.2);

        this.masitas.buttonEvents.on("buttonClicked", this.onButtonClickMasitas,this)

        if(VariablesCompartidas.vieja == 1 && VariablesCompartidas.masita ==0){
            this.addChild(this.masitas);
        }   else {
            console.log("no rompa las pelotas papi");
        }
    }

    // private onButtonClickTextoEstanli():void{
    //     console.log ("funciona el while")
    //         if (VariablesCompartidas.tweenobjeto == 1){
    //             this.removeChild(this.termo);
    //             VariablesCompartidas.termo = 1;
    //             console.log("YA TENES EL TERMO", VariablesCompartidas.termo)
    //         }
        

    // }
    
    private onButtonClickMasitas():void{
        if (VariablesCompartidas.vieja == 1){
            this.removeChild(this.masitas);
            VariablesCompartidas.masita = 1;
            console.log("YA TENES las masitas", VariablesCompartidas.masita)
        }
    }

    private onButtonClickTexto():void{
        if (VariablesCompartidas.peladoCharla <= 0){
            sound.play("talk", {volume:0.5, singleInstance:true} );
            this.addChild(this.texto);
            VariablesCompartidas.peladoCharla = 1;
            console.log("pelado charla =",VariablesCompartidas.peladoCharla )
            console.log("termo =",VariablesCompartidas.termo);
            this.addChild(this.anunciado);
        } else {

            if (VariablesCompartidas.peladoCharla == 1 && VariablesCompartidas.termo == 0){

                this.addChild(this.texto);

                sound.play("talk", {volume:0.5, singleInstance:true} );

                this.anunciado = new Text(
                    "Me trajiste mi Estanli? \n dale que no tengo todo el dia",
                    {fontSize:65,
                    fill: 0x000000,
                    fontFamily:"Comic Sans MS",
                });
                this.anunciado.width= 1200;
                this.anunciado.position.x= 50;
                this.anunciado.position.y= 900;
                this.addChild(this.anunciado)

            } else if (VariablesCompartidas.peladoCharla == 1 && VariablesCompartidas.termo == 1){
            
                sound.play("talk", {volume:0.5, singleInstance:true} );

                this.addChild(this.texto);

                this.anunciado = new Text(
                    "Gracias papa \n ahora si que se rompen esos materiales",
                    {fontSize:65,
                    fill: 0x000000,
                    fontFamily:"Comic Sans MS",
                });
                this.anunciado.width= 1200;
                this.anunciado.position.x= 50;
                this.anunciado.position.y= 900;
                VariablesCompartidas.textopluspela = 1;
                // VariablesCompartidas.peladoCharla = 0;
                // VariablesCompartidas.termo = 0;
                
                this.addChild(this.anunciado)

            }// else if (VariablesCompartidas.textopluspela == 1 && VariablesCompartidas.peladoCharla == 0 && VariablesCompartidas.termo == 0){

            //     sound.play("talk", {volume:0.5, singleInstance:true} );

            //     this.addChild(this.texto);

            //     this.anunciado = new Text(
            //         "Sabias que apretando en la \n plaza del soldado veras algo secreto?",
            //         {fontSize:65,
            //         fill: 0x000000,
            //         fontFamily:"Bauhaus 93",
            //     });
            //     this.anunciado.width= 1200;
            //     this.anunciado.position.x= 50;
            //     this.anunciado.position.y= 900;

            //     this.addChild(this.anunciado)
            // }
        }
        // VariablesCompartidas.peladoCharla == 0;

    }

    
    private onButtonClickClose():void{
            if (VariablesCompartidas.peladoCharla <= 0 ){
                this.removeChild(this.texto);
                this.removeChild(this.anunciado);

                sound.stop("talk");


            } else if (VariablesCompartidas.peladoCharla >= 0 ){

                this.removeChild(this.texto);
                this.removeChild(this.anunciado);

                sound.stop("talk");

                if (VariablesCompartidas.peladoCharla == 1 && VariablesCompartidas.termo == 1){
                    this.removeChild(this.texto);
                    this.removeChild(this.anunciado);

                    sound.stop("talk");

    
                } else if (VariablesCompartidas.peladoCharla == 1 && VariablesCompartidas.termo == 1){
                    this.removeChild(this.texto);
                    this.removeChild(this.anunciado);

                    sound.stop("talk");

                }

            }

    }







    public update(deltaTime: number, _deltaFrame: number): void {
        this.PlayerA.update(deltaTime);
        
        // this.timePassed += deltaTime;

        // if (this.timePassed > (2000 * 200/this.gameSpeed)){

        //     this.gameSpeed += 10;
        //     this.timePassed = 0;
        //     const platform= new Platform();
        //     this.plat.push(platform);
        //     this.world.addChild(platform);

        //     platform.position.set(WIDTH, Math.random()*800);
        //     platform.scale.set(5, 5);

        // }

        // for (let platform of this.plat){
            // console.log(checkCollision(this.PlayerA, platform));
            // platform.speed.x = - this.gameSpeed;
            // platform.update(deltaTime/1000);
            // const overlap = checkCollision(this.PlayerA, this.hit);
            // if (overlap != null)
            // {
            //     // this.PlayerA.separate(overlap, this.tincho.position);
            //     this.onButtonClick();
            // }

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

            const overlapwals = checkCollision(this.PlayerA, this.wals);

            if (overlapwals != null)
            {
                this.PlayerA.separatefloor(overlapwals, this.wals.position);
                
            }

            const overlapwals2 = checkCollision(this.PlayerA, this.wals2);

            if (overlapwals2 != null)
            {
                this.PlayerA.separatefloor(overlapwals2, this.wals2.position);
                
            }
            
            // if (platform.getHitbox().right < 0){
            //     platform.destroy();
            // }
        // }        

        // this.plat = this.plat.filter((elem => !elem.destroyed))

        // this.world.x = -this.PlayerA.x * this.worldTransform.a + WIDTH/4;
        // this.background.tilePosition.x = this.world.x  *0.3;
        // // // this.background.tilePosition.x -= this.gameSpeed * deltaTime/1000;/** 0.5 efecto paralax*/;

        // this.world.y = -this.PlayerA.y * this.worldTransform.d + HEIGHT/2.2;
        // this.background.tilePosition.y = this.world.y  *0.3;


        if (this.PlayerA.x > SceneManager.WIDTH)
        {
            this.PlayerA.x = SceneManager.WIDTH;

        }else if (this.PlayerA.x < 0)
        {
            this.PlayerA.x = 0;

        }


        // if (this.PlayerA.y > HEIGHT)
        // {
        //     this.PlayerA.y = 900;
        //     this.PlayerA.speed.y = 0;
        //     this.PlayerA.canJump = true;

        }

            private onButtonMapa():void{
        SceneManager.changeScene(new mapa)
    }
    

}
