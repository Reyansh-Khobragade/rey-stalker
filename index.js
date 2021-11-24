const discord = require("discord.js");
const config = require("./config.json");
const screenshot = require("screenshot-desktop");
const notifier = require("node-notifier");

const client = new discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS"],
    ws: {
        properties: {
            $browser: "Discord iOS", // mobile presence
        },
    },
});

const ownerId = config.ownerId; // owner id
const prefix = config.prefix;
const stalkTimeout = config.stalkTimeout; // in ms
let isStopped = false;
let recentlyStalked = false;

client.on("ready", () => {
    client.user.setActivity("Da Screens", {
        type: "WATCHING",
    });
    console.log(`[API] logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if (!message.guild || message.author.bot) return;
    if (message.content.toLowerCase() === `${prefix} ss`) {
        if (isStopped) {
            return;
        } else {
            if (recentlyStalked) {
                return;
            } else {
                recentlyStalked = true;
                setTimeout(() => {
                    recentlyStalked = false;
                }, stalkTimeout);
                console.log(
                    `${new Date()
                        .toLocaleString()
                        .split(", ")
                        .reverse()
                        .join(", ")} | ${message.author.tag} tryna stalk`
                );
                notifier.notify({
                    closeLabel: "Rey Stalker",
                    subtitle: "Rey Stalker",
                    title: "Someone Stalked",
                    message: `${message.author.tag} stalked at ${message.guild.name}`,
                });
                return screenshot.all().then((imgs) => {
                    let i = 0;
                    for (i = 0; i < imgs.length; i++) {
                        let attachment = new discord.MessageAttachment(
                            imgs[i],
                            `screen-${i + 1}.png`
                        );
                        message.channel.send({
                            content: `Screenshot for \`Screen-${i + 1}\``,
                            files: [attachment],
                        });
                    }
                });
            }
        }
    } else if (message.content.toLowerCase() === `${prefix} ping`) {
        return message.channel
            .send({
                content: "pong",
            })
            .then((m) => {
                m.edit({
                    content: `:ping_pong: Ping: ${
                        m.createdTimestamp - message.createdTimestamp
                    }ms\n<:discordApi:853932920456085504> API Latency: ${
                        client.ws.ping
                    }ms`,
                });
            });
    } else if (message.content.toLowerCase() === `${prefix} help`) {
        return message.reply({
            content: "no hlep for u stoobid",
        });
    } else if (message.content.toLowerCase() === `${prefix} rickroll`) {
        return message.reply({
            content: "https://imgur.com/NQinKJB",
        });
    } else if (message.content.toLowerCase() === `${prefix} on`) {
        if (message.author.id !== ownerId) {
            return message.reply({
                content: "who u? first take permission from my owner ;-;",
            });
        } else {
            if (isStopped) {
                isStopped = false;
                return message.reply({
                    content: "turned on stalker sar",
                });
            }
            return message.reply({
                content: "it's already on u noob",
            });
        }
    } else if (message.content.toLowerCase() === `${prefix} off`) {
        if (message.author.id !== ownerId) {
            return message.reply({
                content: "who u? first take permission from my owner ;-;",
            });
        } else {
            if (!isStopped) {
                isStopped = true;
                return message.reply({
                    content: "turned off stalker sar",
                });
            }
            return message.reply({
                content: "it's already off u noob",
            });
        }
    } else if (
        message.content === `<@${client.user.id}>` ||
        message.content === `<@!${client.user.id}>`
    ) {
        return message.reply({
            content: "sup",
        });
    }
});
client.login(config.token);
