const { TOKEN } = require("../config.json");

module.exports = {
    execute(Client, err){
        console.log(err);
        Client.login(TOKEN);
    }
}
