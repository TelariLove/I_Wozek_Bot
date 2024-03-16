import { Scenes } from 'telegraf';
import { wizardRolls } from './wizardRolls.mjs';

const inventoryScene = new Scenes.WizardScene('inventoryScene', wizardRolls);

export { inventoryScene };
export default { inventoryScene };
