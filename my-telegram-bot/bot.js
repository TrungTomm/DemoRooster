const TelegramBot = require('node-telegram-bot-api');

// Thay 'YOUR_TOKEN' bằng token mà bạn nhận được từ BotFather
const token = '7369974417:AAH_IDoKFSIRFahOv-CNjoCafbLoov_uLWE';
const bot = new TelegramBot(token, { polling: true });

// Lắng nghe lệnh /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const responseMessage = 'Chào mừng bạn đến với game của chúng tôi!';

    // Tạo nút inline "Play" với liên kết URL
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Play',
                        url: 'https://trungtomm.github.io/Rooster-Battle/' // Liên kết đến mini app
                    }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, responseMessage, options); // Gửi phản hồi cùng với nút
});

// Lắng nghe các tin nhắn khác
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(`Received message: ${msg.text}`); // Ghi lại tin nhắn nhận được
});
