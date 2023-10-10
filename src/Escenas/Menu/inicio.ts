import { Texture, Text, TilingSprite, TextStyle } from "pixi.js";
import { SceneManager } from "../SceneManager";
import { mapa } from "./mapa";
import { button } from "../../aplicaciones/button";
import { sound } from "@pixi/sound";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { Tween } from "tweedle.js";

export class audio extends SceneBase{

    public override update(): void {}
    
    private background: TilingSprite;

    private Button : button;

    private comienzo:Text;
    private intro:Text;

    private a: Tween<Text>;

    constructor()
    {
        super()

        this.background = new TilingSprite(Texture.from("brigadeirou"), SceneManager.WIDTH, SceneManager.HEIGHT);

        this.Button = new button(
            Texture.from("/objetos/boton largo.png"), 
            Texture.from("/objetos/boton largo.png"), 
            Texture.from("/objetos/boton apretao largoo.png")
            );

        this.Button.position.x=1505;
        this.Button.position.y=955;

        this.Button.buttonEvents.on("buttonClicked", this.onButtonOn, this)

        this.comienzo = new Text("SALTAR", {fontSize:28, fill: 0x23cd4b, fontFamily:"Comic Sans MS"});

        this.comienzo.position.x=1534;
        this.comienzo.position.y=960;

        const style = new TextStyle({
            align: "center",
            dropShadow: true,
            dropShadowColor: "#d1d1d1",
            fill: "#dd831d",
            fontFamily: "Comic Sans MS",
            fontSize: 48,
            stroke: "#da1010"
        });

        this.intro = new Text(
            "En un giro épico de la historia, el Brigadier López,\n un valiente líder del pasado, se encuentra atrapado en una era desconocida.\n Una misteriosa anomalía temporal lo ha arrastrado al presente,\n donde la tecnología y la sociedad han evolucionado más allá de su comprensión.\nEl destino del Brigadier López está en tus manos.\n Para regresar a su tiempo y cumplir su deber histórico,\n debe completar una serie de tareas cruciales en este mundo moderno.\n A medida que te embarcas en esta emocionante aventura,\n te encontrarás con desafíos,\n desde navegar por las complejidades de la tecnología actual\n hasta comprender las sutilezas de la vida cotidiana en la era contemporánea.\nPero ten en cuenta que el tiempo es limitado, y la historia espera.\n Cada tarea cumplida lo acerca un paso más a su hogar temporal.\n ¡Ayuda al Brigadier López a\n adaptarse a esta nueva realidad,\n aprender las habilidades necesarias\n y superar los obstáculos en su camino hacia el regreso a su tiempo!", style);
            
        this.intro.position.x = 60;
        this.intro.position.y = 1000;

        this.a = new Tween (this.intro);

        this.a.to({y:-1100}, 55000).onComplete(()=>{
            SceneManager.changeScene(new mapa)
            console.log("completao")
        });

        this.a.start();

        sound.play("goku", {volume:0.5, singleInstance:true} );

        this.addChild(this.background);
        this.addChild(this.intro);
        this.addChild(this.Button);
        this.addChild(this.comienzo);

    }

    private onButtonOn():void{
        SceneManager.changeScene(new mapa)
    }
}