const { zokou } = require('some-path/zokou');
const moment = require('moment-timezone');
const { getBuffer } = require('some-path/getBuffer');
const axios = require('axios');
const speed = require('some-path/speed');

// Function to format runtime
function runtime(seconds) {
    // Convert seconds into days, hours, minutes, and seconds
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const seconds = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Command Handlers
zokou({
    pattern: 'ping',
    desc: 'Check the ping',
    Category: 'General',
    reaction: '📡',
    fromMe: true
}, async (sender, message, args) => {
    const timestamp = speed();
    const flashspeed = (speed() - timestamp).toFixed(2);
    await message.reply(`Ping: ${flashspeed}ms`);
});

zokou({
    pattern: 'uptime',
    desc: 'Check the bot uptime',
    Category: 'General',
    reaction: '🎭',
    fromMe: true
}, async (sender, message, args) => {
    await message.reply(`Uptime: ${runtime(process.uptime())}`);
});

zokou({
    pattern: 'ss',
    desc: 'Take a screenshot',
    Category: 'General',
    reaction: '🎥',
    fromMe: true
}, async (sender, message, args) => {
    if (!args || args.length < 1) return message.reply('No URL provided');
    const url = args.join(' ');
    const buffer = await getBuffer(url);
    await message.reply({ image: buffer, caption: 'Here is your screenshot' });
});
