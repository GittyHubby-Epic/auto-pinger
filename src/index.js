const Discord = require("discord.js");
const Client = new Discord.Client();
const { TOKEN } = require("./config.json");


Client.on("ready", () => {
    let ready = require("./events/ready.js").execute(Client);
});

Client.on("error", (err) => {
    let reboot = require("./events/reboot.js").execute(Client, err);
});

Client.login(TOKEN);
