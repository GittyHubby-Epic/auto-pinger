const Discord = require("discord.js");
const Client = new Discord.Client();

const { TOKEN } = require("../config.json");

module.exports = {
    execute(Client){
        console.log(err);
        Client.login(TOKEN);
    }
}
