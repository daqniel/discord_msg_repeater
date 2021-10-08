require("dotenv").config(); //initialize dotenv

import { tracked_channels, delays } from "./conf";
const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// custom role alert, probably belongs in conf.js but meh, eventually.
const message_suffix = "@ALERT"

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event Handlers
client.on("message", (msg) => {
  console.log(client);
  if (tracked_channels.includes(msg.channelId)) {
    for (const channel of output_channels) {
      setTimeout(function () {
        client.channels.cache
          .get(channel)
          .send(
            "> " +
              msg.content +
              "\nfrom " +
              msg.member.displayName +
              " in <#" +
              msg.channelId +
              "> " +
              message_suffix
          );
      }, delays[msg.channelId] || delays["default"]);
    }
  }
});

// Login
client.login(process.env.CLIENT_TOKEN);
