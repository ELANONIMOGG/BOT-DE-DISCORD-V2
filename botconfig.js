module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "*", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/PWqquZHXnb", //Support Server Link
  Token: process.env.Token || "TOKEN", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "913533508188774471", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "JadzrHVdaqYjbYfmdOuZLrpReCZJ2g4-", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://drive.google.com/file/d/12G7hX-ahhOdU9SC3L2m-HqacXWxTHLS7/view?usp=sharing", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://changeme", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  
  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "EL INSTAGRAM DE @el_anonimo_gg", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "your password",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "4978ab7d90864111a146b312ee9e6705", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "a55ad3a3caad4aa189bdc88b1c0ff37d", //Spotify Client Secret
  },
};
