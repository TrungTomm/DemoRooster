const TelegramBot = require('node-telegram-bot-api');
const token = '7369974417:AAH_IDoKFSIRFahOv-CNjoCafbLoov_uLWE';
const bot = new TelegramBot(token, {polling: true});

// Khi người dùng gõ /start, gửi nút "Play"
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Play',
            callback_data: 'play'
          }
        ]
      ]
    }
  };
  
  bot.sendMessage(chatId, 'Welcome! Press Play to start.', opts);
});

// Xử lý sự kiện khi người dùng nhấn nút "Play"
bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  
  if (callbackQuery.data === 'play') {
    bot.sendMessage(message.chat.id, 'Here is the game!', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Go to Game',
              url: 'https://trungtomm.github.io/Rooster-Battle/'
            }
          ]
        ]
      }
    });
  }
});
