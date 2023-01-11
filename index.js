const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = config.prefix

client.once('ready', () => {
    console.log("Bot Is Run")

    client.user.setStatus('dnd')
});

client.login(config.token);