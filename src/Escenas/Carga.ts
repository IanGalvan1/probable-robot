import { Assets, Graphics } from "pixi.js";
import { SceneBase } from "../aplicaciones/SceneAbstract";
import { SceneManager } from "./SceneManager";
import { manifest } from "../assets";
import { Inicio } from "./Menu/MenuA";

export class Carga extends SceneBase{

    private bar: Graphics;

    public update(): void { }

    constructor(){

        super();

        this.bar = new Graphics();

        this.SetBarPorcent(0);

        this.bar.x = SceneManager.WIDTH *0.5;
        this.bar.y = SceneManager.HEIGHT *0.5;

        this.bar.pivot.x = this.bar.width/2;
        this.bar.pivot.y = this.bar.height/2;

        this.addChild(this.bar);

        this.downLoadAssets().then(() =>
        {
            this.LoadFinished();
        }
        );
    }

    private async downLoadAssets(): Promise<void>
    {
        
        await Assets.init({ manifest: manifest })

        const bundleIds =  manifest.bundles.map(bundle => bundle.name);

        await Assets.loadBundle(bundleIds, this.SetBarPorcent.bind(this));
        
    };

    private SetBarPorcent (Percent:number)
    {
        const factor = Percent/100;
        this.bar.clear();

        this.bar.beginFill(0xFF0000,1);
        this.bar.drawRect(0,0,SceneManager.WIDTH * 0.8 * factor, SceneManager.HEIGHT * 0.1);
        this.bar.endFill();

        this.bar.lineStyle(5, 0xFFFFFF, 1)
        this.bar.beginFill(0x000000,0);
        this.bar.drawRect(0,0,SceneManager.WIDTH * 0.8, SceneManager.HEIGHT * 0.1);
        this.bar.endFill();
    }
    private LoadFinished()
    {
        SceneManager.changeScene(new Inicio)
    }
}