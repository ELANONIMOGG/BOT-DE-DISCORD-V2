const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();



client.build();

module.exports = client; 
 
client.on("ready", () => {
  console.log("EL BOT ESTA LISTO!");
});

const token = process.env['TOKEN']
client.login(token)
