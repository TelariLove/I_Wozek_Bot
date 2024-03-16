import { bot } from '../connecting.mjs';

export const command = 'start';
export const description = 'let\' go start to inventory';
export const start = { command, description };

bot.command('start', async (ctx) => {
	ctx.scene.enter('inventoryScene');
});
