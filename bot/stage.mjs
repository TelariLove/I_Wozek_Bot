import { Scenes } from 'telegraf';
import { inventoryScene } from './scenes/inventory/inventoryScene.mjs';

export const stage = new Scenes.Stage([inventoryScene]);
export default { stage };
