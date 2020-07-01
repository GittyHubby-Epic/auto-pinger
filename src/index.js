const Discord = require("discord.js");
const Client = new Discord.Client();
const { TOKEN } = require("./config.json");


Client.on("ready", () => {
    var ready = require("./events/ready.js").execute(Client);
});

Client.on("error", (err) => {
    var reboot = require("./events/reboot.js").execute(Client);
});

Client.login(TOKEN);
