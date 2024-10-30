const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const botToken = '6071378591:AAHRj_H1o9Iwv4CkjI1CiKF7cVcwrt0qb3w';
const chatId = '879974022';

// Настройка Express.js для парсинга тела POST-запроса
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Инициализация телеграм-бота
const bot = new TelegramBot(botToken, { polling: true });

// Обработчик POST-запроса с данными от фронтенда
app.post('/send_message', (req, res) => {
    const { name, message } = req.body;

    // Отправляем данные в телеграм-бот
    const text = `Новое сообщение:\nИмя: ${name}\nСообщение: ${message}`;
    bot.sendMessage(chatId, text);

    res.send('Message sent to Telegram');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});