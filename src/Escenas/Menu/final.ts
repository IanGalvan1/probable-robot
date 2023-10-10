import { Texture, Text, TilingSprite, TextStyle } from "pixi.js";
import { SceneManager } from "../SceneManager";
import { SceneBase } from "../../aplicaciones/SceneAbstract";
import { Tween } from "tweedle.js";
import { Inicio } from "./MenuA";

export class final extends SceneBase{

    public override update(): void {}
    
    private background: TilingSprite;

    private intro:Text;

    private a: Tween<Text>;

    constructor()
    {
        super()

        this.background = new TilingSprite(Texture.from("brigadeirou"), SceneManager.WIDTH, SceneManager.HEIGHT);

        const style = new TextStyle({
            align: "center",
            dropShadowAngle: 100000,
            dropShadowBlur: 30,
            dropShadowDistance: 20,
            fill: "#dd831d",
            fontFamily: "Comic Sans MS",
            fontSize: 48,
            stroke: "#da1010"
        });

        this.intro = new Text(
            "AGRADECIMIENTOS A \n\n Killabuniesgames \n\n Capital Activa \n\n Todos mis compañeros \n los cuales me dieron una mano con algunos problemas \n\n\n\n\n\n\n\n\n\n\n Esto continuara.... \n\n\n\n (tal vez)", style);
            
        this.intro.position.x = 300;
        this.intro.position.y = 1000;

        this.a = new Tween (this.intro);

        this.a.to({y:-1500}, 15000).onComplete(()=>{
            SceneManager.changeScene(new Inicio)
            console.log("completao")
        });

        this.a.start();

        this.addChild(this.background);
        this.addChild(this.intro);

    }

}