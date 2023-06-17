import type { ResolverManifest } from "pixi.js";

export const manifest:ResolverManifest = {
    bundles: [
        {
            name : "primeros",
            assets:
            {
                ianpj: "./IanPj.png",
                Clampy: "./clampy.png",
                gorro: "./gorro.png",
                baldosa: "./baldosa.png",
            }
        },
        {
            name : "BrigadorCorre",
            assets:
            {
                brigadiercamina1: "./Brigadier/BrigadierCaminando1.png",
                brigadiercamina2: "./Brigadier/BrigadierCaminando2.png",
                brigadiercamina3: "./Brigadier/BrigadierCaminando3.png",
                brigadiercamina4: "./Brigadier/BrigadierCaminando4.png",
            }
        },
        {
            name : "cartelito",
            assets:
            {
                check: "./winwin/green_boxCheckmark.png",
                rectanguloverde1: "./winwin/green_button00.png",
                rectanguloverde2: "./winwin/green_button13.png",
                panelgris: "./winwin/grey_panel.png",
                equis: "./winwin/red_boxCross.png",
            }
        },
        
    ]
}