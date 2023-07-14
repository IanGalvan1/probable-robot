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
                brigadiercaminaA1: "./Brigadier/BrigadierCaminando1.png",
                brigadiercaminaA2: "./Brigadier/BrigadierCaminando2.png",
                brigadiercaminaA3: "./Brigadier/BrigadierCaminando3.png",
                brigadiercaminaA4: "./Brigadier/BrigadierCaminando4.png",

                brigadiercaminaB1: "./Brigadier/BrigadierCaminaLado1.png",
                brigadiercaminaB2: "./Brigadier/BrigadierCaminaLado2.png",
                brigadiercaminaB3: "./Brigadier/BrigadierCaminaLado3.png",
                brigadiercaminaB4: "./Brigadier/BrigadierCaminaLado4.png",
                brigadiercaminaB5: "./Brigadier/BrigadierCaminaLado5.png",
                brigadiercaminaB6: "./Brigadier/BrigadierCaminaLado6.png",
                
                brigadiercaminaC1: "./Brigadier/BrigadierLopez atras 1.png",
                brigadiercaminaC2: "./Brigadier/BrigadierLopez atras 2.png",
                brigadiercaminaC3: "./Brigadier/BrigadierLopez atras 3.png",
                brigadiercaminaC4: "./Brigadier/BrigadierLopez atras 4.png",
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
            name : "mundoA",
            assets:
            {
                bg: "./fondos/word 1-1.png",
                special: "./fondos/EspecialBlock.png",
            }
        },


        
    ]
}