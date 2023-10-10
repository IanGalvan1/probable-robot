import { SceneManager } from './Escenas/SceneManager';
import { Carga } from './Escenas/Carga';

SceneManager.initialize();
SceneManager.changeScene(new Carga())

window.addEventListener("contextmenu", e=> e.preventDefault());