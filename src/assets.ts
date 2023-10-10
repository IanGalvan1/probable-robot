import type { ResolverManifest } from "pixi.js";

export const manifest:ResolverManifest = {
    bundles: [

        {
            name : "personajes",
            assets:
            {
                abuela: "./personajes/abuela.png",
                abuela2: "./personajes/abuela2.png",
                abuela3: "./personajes/abuela3.png",
                pelao: "./personajes/pelao.png",
                pelao2: "./personajes/pelao2.png",
                pelao3: "./personajes/pelao3.png",
            }
        },
        {
            name : "estrella",
            assets:
            {
                estrella1: "./winwin/estrella 1.png",
                estrella2: "./winwin/estrella 2.png",
                estrella3: "./winwin/estrella medio.png",
                estrella4: "./winwin/estrella prefull.png",
                estrella5: "./winwin/estrellafull.png",
                
            }
        },

        {
            name : "Spritesheet",
            assets:
            {
                spritesheet: "./spritesheet/texture-0.json",
                spritesheet1: "./spritesheet/texture-1.json",
                spritesheetbotons: "./spritesheet/objetos.json",
            }
        },

        {
            name : "fondos",
            assets:
            {
                puente: "./fondos/elpuente.png",
                peatonal: "./fondos/lapeatonal.png",
                brigadeirou: "./fondos/brigadeirou.png",
                laventi: "./fondos/laventi.png",
                mapa: "./fondos/mapa.PNG",
            }
        },

        {
            name : "objetos",
            assets:
            {
                galleta: "./objetos/galletas-danesas.png",
                galleta2: "./objetos/galletas-danesas2.png",
                galleta3: "./objetos/galletas-danesas3.png",
                termo: "./objetos/estanli.png",
                termo2: "./objetos/estanli2.png",
                termo3: "./objetos/estanli3.png",

                mapita: "./objetos/mapita.png",

                equis: "./objetos/CERRAR.png"
            }
        },

        {
            name: "sonidos",
            assets:
            {
                talk: "./Sonidos/talking.mp3",
                goku: "./Sonidos/goku brigadier.mp3"
            }
        }

        
    ]
}