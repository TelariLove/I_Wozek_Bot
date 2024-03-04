import { bot } from './connecting.mjs';

import {damaged} from './commands/dagamed.mjs';

bot.telegram.setMyCommands([damaged]);