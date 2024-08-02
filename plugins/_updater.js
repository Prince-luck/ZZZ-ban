const { zokou } = require("some_module");
const moment = require("moment");
const { getBuffer } = require("some_other_module");
const axios = require("axios").default;
const speed = require("some_speed_module");

let timestamp = speed();
let flashspeed = (speed() - timestamp).toFixed(2);

zokou({
    pattern: "update",
    desc: "Update the bot deployment",
    Category: "tools",
    reaction: "📡",
    fromMe: true
}, async (citel) => {
    try {
        let commits = await DB.syncgit();
        if (commits.total === 0) {
            return await citel.reply(`*${Config.VERSION} IS Updating*`);
        }
        let update = await DB.sync();
        let text = `*UPDATE RUNNING*\n\t${update}*`;
        await citel.bot.sendMessage(citel.jid, { text });
        await require("simple-git")().reset("hard", ["HEAD"]);
        await require("simple-git")().pull();
        await citel.reply(
            process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY
                ? "*`BOT UPDATED`*\n*RESTART YOUR BOT FOR UPDATE TO TAKE EFFECT*"
                : "```*Successfully updated. Now You Have Latest Version Installed!*"
        );
    } catch (e) {
        citel.error(`${e}\n\nCommand: updatenow`, e, "ERROR!");
    }
});

if (process.env.HEROKU_API_KEY) {
    console.log("HEROKU : checking for auto update!");
    updateHerokuApp();
}

zokou({
    pattern: "speed",
    desc: "Check bot speed",
    Category: "tools",
    reaction: "📡",
    fromMe: true
}, async (citel, match) => {
    await citel.reply(`Speed: ${flashspeed} ms`);
});

zokou({
    pattern: "uptime",
    desc: "Check bot uptime",
    Category: "tools",
    reaction: "🎭",
    fromMe: true
}, async (citel, match) => {
    const runtime = process.uptime();
    await citel.reply(`Uptime: ${runtime}`);
});

zokou({
    nomCom: "ss",
    desc: "Take a screenshot of a URL",
    Categorie: "tools",
    reaction: "🎥",
    fromMe: true
}, async (citel, match) => {
    const url = match[1];
    if (!url || url.length === 0) {
        return citel.reply("Please provide a URL.");
    }
    const screenshotUrl = `https://api.screenshotapi.net/screenshot?token=your_token&url=${url}`;
    const imageBuffer = await getBuffer(screenshotUrl);
    await citel.sendMessage(citel.jid, { image: imageBuffer }, { caption: "Here is your screenshot" }, { quoted: citel });
});
