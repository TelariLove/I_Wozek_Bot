import { bot } from './connecting.mjs';

import { start } from './commands/start.mjs';
import { end } from './commands/end.mjs';
import { damaged } from './commands/dagamed.mjs';
import { pagination } from './commands/pagination.mjs';
import { help } from './commands/help.mjs';
import { status } from './commands/status.mjs';

bot.telegram.setMyCommands([start, end, damaged, pagination, help, status]);
