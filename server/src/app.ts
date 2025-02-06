import { Intents } from 'deps';
import { QnABot } from './QnABot.ts';

const bot = new QnABot();

bot.connect(Deno.env.get('DISCORD_BOT_TOKEN'), Intents.None);
