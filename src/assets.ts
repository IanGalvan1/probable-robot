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
                checkyellow: "./winwin/yellow_boxCheckmark.png",
                checkblue: "./winwin/blue_boxCheckmark.png",
                rectanguloverde1: "./winwin/green_button00.png",
                rectanguloverde2: "./winwin/green_button13.png",
                panelgris: "./winwin/grey_panel.png",
                equis: "./winwin/red_boxCross.png",
                estrella: "./winwin/Estrella.png",
                estrellavacia: "./winwin/EstrellaVacia.png",
                diamante: "./winwin/Diamante.png",
                yen: "./winwin/Yen.png",
                back: "./winwin/back.png"
            }
        },
        {
            name : "dance",
            assets:
            {
                dance1: "./danceweed/1.png",
                dance2: "./danceweed/2.png",
                dance3: "./danceweed/3.png",
                dance4: "./danceweed/4.png",
                dance5: "./danceweed/5.png",
            }
        },
        
    ]
}