const Discord = require("discord.js");

const { PINGCHANNELID, PINGCHANNEL2ID } = require("../config.json");

module.exports = {
    execute(Client){
        function ping() {
            const pingchannel = Client.channels.cache.get(PINGCHANNELID);
            pingchannel.send("@everyone");
            console.log("Ping Sent. (Channel 1)");
        }

        function ping2() {
            const pingchannel2 = Client.channels.cache.get(PINGCHANNEL2ID);
            pingchannel2.send("@everyone");
            console.log("Ping Sent. (Channel 2)");
        }

        setInterval(ping, 5000);
        setInterval(ping2, 5000);
        console.log(Client.user.username + " is ready!");
    }
}
