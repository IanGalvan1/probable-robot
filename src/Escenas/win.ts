import { AnimatedSprite, Container, NineSlicePlane, Texture, Text, /*Sprite */} from "pixi.js";
import { button } from "../interactr/button";
import { Keyboard } from "../interactr/Keyboard";

export class Win extends Container {

    private check:button;

    private myText:Text;

    constructor()
    {
        super()
        
        const panel = new NineSlicePlane(
            Texture.from("panelgris"),
            35,35,35,35,
        );

        // const check = new NineSlicePlane(
        //     Texture.from("check"),
        //     10,10,10,10,
        // );

        this.check = new button(
        Texture.from("check"), 
        Texture.from("checkyellow"), 
        Texture.from("checkblue")
        /*this.onButtonClick.bind(this)*/ //esta funcion es importante que this, sea de esta clase
        );

        this.check.buttonEvents.on("buttonClicked", this.onButtonClick, this);
        this.check.width=60;
        this.check.height=60;

        this.check.position.x=1020;
        this.check.position.y=455;

        const rectanguloverde1 = new NineSlicePlane(
            Texture.from("rectanguloverde1"),
            35,5,35,10,
        );

        const rectanguloverde2 = new NineSlicePlane(
            Texture.from("rectanguloverde2"),
            35,35,35,35,
        );

        const equis = new NineSlicePlane(
            Texture.from("equis"),
            0,0,0,0
        );

        const star = new NineSlicePlane(
            Texture.from("estrella"),
            0,0,0,0,
        );
        const star1 = new NineSlicePlane(
            Texture.from("estrella"),
            0,0,0,0,
        );
        const diamante = new NineSlicePlane(
            Texture.from("diamante"),
            0,0,0,0,
        );

        const starvacia = new NineSlicePlane(
            Texture.from("estrellavacia"),
            0,0,0,0,
        );

        const yen = new NineSlicePlane(
            Texture.from("yen"),
            0,0,0,0,
        );
        const back = new NineSlicePlane(
            Texture.from("back"),
            0,0,0,0,
        );

        const myPoint: Text = new Text("20", {fontSize:34, fill: 0x000000, fontFamily:"Bauhaus 93"});

        this.myText = new Text("GANASTE", {fontSize:35, fill: 0x73cd4b, fontFamily:"Bauhaus 93",});
        
        const danceweed: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("dance1"),
                Texture.from("dance2"),
                Texture.from("dance3"),
                Texture.from("dance4"),
                Texture.from("dance5"),
                Texture.from("dance5"),
                Texture.from("dance4"),
                Texture.from("dance3"),
                Texture.from("dance2"),
                Texture.from("dance1"),
            ],
            true
        );
        danceweed.play();
        danceweed.animationSpeed = 0.09
        
        danceweed.position.set(1020, 360);
        danceweed.scale.set(0.45, 0.45);
        
        this.addChild(panel);

        panel.width= 120;
        panel.height= 200;
        panel.scale.set(2)

        panel.position.x=880;
        panel.position.y=150;

        this.addChild(danceweed);

        this.addChild(rectanguloverde1);

        rectanguloverde1.width=180;
        rectanguloverde1.height=77;

        rectanguloverde1.position.x=910;
        rectanguloverde1.position.y=449;

        this.addChild(myPoint);

        myPoint.position.x=970;
        myPoint.position.y=462;

        this.addChild(this.check);


        this.addChild(rectanguloverde2);

        rectanguloverde2.width=180;
        rectanguloverde2.height=77;

        rectanguloverde2.position.x=910;
        rectanguloverde2.position.y=180;




        this.addChild(equis);

        equis.width=50;
        equis.height=50;

        equis.position.x=1080;
        equis.position.y=130;


        this.addChild(back);

        back.width=50;
        back.height=50;

        back.position.x=870;
        back.position.y=130;


        this.addChild(this.myText);

        this.myText.position.x=931;
        this.myText.position.y=195;

            Keyboard.down.on("KeyB", this.onKeyB, this);
            Keyboard.up.on("KeyB", this.onKeyBup, this);

        this.addChild(star);

        star.width=35;
        star.height=35;
        star.scale.set(2);

        star.position.x=972;
        star.position.y=280;

        this.addChild(starvacia);

        starvacia.width=30;
        starvacia.height=30;
        starvacia.scale.set(2);

        starvacia.position.x=1030;
        starvacia.position.y=315;
        starvacia.angle= -25;

        this.addChild(star1);

        star1.width=30;
        star1.height=30;
        star1.scale.set(2);

        star1.position.x=930;
        star1.position.y=290;
        star1.angle = 25;

        this.addChild(diamante);

        diamante.width=30;
        diamante.height=30;
        diamante.scale.set(2);

        diamante.position.x=940;
        diamante.position.y=370;

        this.addChild(yen);

        yen.width=30;
        yen.height=30;
        yen.scale.set(1.5);

        yen.position.x=920;
        yen.position.y=458;
        

    }

    private onKeyB():void{
        console.log("aprete la B", this);
    }

    private onKeyBup():void{
        console.log("solte la B", this);
    }

    private onButtonClick():void{
        console.log("", Keyboard.state.get("KeyA"), this);

    }


}