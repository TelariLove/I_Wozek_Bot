import { bot } from './connecting.mjs';

import { start } from './commands/start.mjs';
import { pagination } from './commands/pagination.mjs';
import { help } from './commands/help.mjs';
import { status } from './commands/status.mjs';

bot.telegram.setMyCommands([start, pagination, help, status]);
