import { bot } from './connecting.mjs';

import { damaged } from './commands/dagamed.mjs';
import { help } from './commands/help.mjs';

bot.telegram.setMyCommands([damaged, help]);