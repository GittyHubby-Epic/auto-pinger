const { PINGCHANNELID, PINGCHANNEL2ID, INTERVAL } = require("../config.json");

module.exports = {
    execute(Client){
        function ping() {
            const pingchannel = Client.channels.cache.get(PINGCHANNELID);
            pingchannel.send("@everyone");
        }

        function ping2() {
            const pingchannel2 = Client.channels.cache.get(PINGCHANNEL2ID);
            pingchannel2.send("@everyone");
        }

        setInterval(ping, INTERVAL * 1000);
        setInterval(ping2, INTERVAL * 1000);
        console.log(Client.user.username + " is ready!");
    }
}
