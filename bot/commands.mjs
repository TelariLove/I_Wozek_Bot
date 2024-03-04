import { bot } from './connecting.mjs';

import { damaged } from './commands/dagamed.mjs';
import { pagination } from './commands/pagination.mjs';
import { help } from './commands/help.mjs';

bot.telegram.setMyCommands([damaged, pagination, help]);