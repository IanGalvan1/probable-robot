import { Container, NineSlicePlane, Text, Texture } from "pixi.js";

export class Scene extends Container {

    constructor()
    {
        super()
        
        const panel = new NineSlicePlane(
            Texture.from("panelgris"),
            35,35,35,35,
        );

        const check = new NineSlicePlane(
            Texture.from("check"),
            10,10,10,10,
        );

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
            10,10,10,10
        );

        const myText: Text = new Text ("A", {fontSize:18, fill: 0xFF0010, fontFamily:"Comic Sans MS"});

        this.addChild(panel);

        panel.width= 120;
        panel.height= 200;
        panel.scale.set(2)

        panel.position.x=880;
        panel.position.y=150;

        this.addChild(rectanguloverde1);

        rectanguloverde1.width=180;
        rectanguloverde1.height=77;

        rectanguloverde1.position.x=910;
        rectanguloverde1.position.y=449;

        this.addChild(check);

        check.width=60;
        check.height=60;

        check.position.x=1020;
        check.position.y=455;


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

        this.addChild(myText);

        myText.position.x=880;
        myText.position.y=200;
    }
}