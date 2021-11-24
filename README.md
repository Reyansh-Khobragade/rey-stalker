# Rey Stalker

Official source code for Rey Stalker Discord bot.

# Contributer

## Reyansh Khobragade

<p align="center" style="text-align: center;">
  <a href="https://www.youtube.com/channel/UCeJOySzx_kPMlgIyW398tRA?sub_confirmation=1"><img src="https://raw.githubusercontent.com/MikeCodesDotNET/ColoredBadges/master/png/streaming/youtube%402x.png"></a>
  <a href="https://discord.gg/nc9D2rjhAR"><img src="https://discord.com/api/guilds/769046129073324032/widget.png?style=banner2"></a>
</p>

<br>
<br>

## Self Hosting

> Prerequisites

### • General

1. Node.js Version 16
2. Npm

### • Windows

Windows 8 or above for notification support.

### • Mac OS

10.8 or more for notification support, or Growl if earlier.

### • Linux

1. node-notifier for notificatons
2. imagemagik for screenshot

Check your package managers for the following packages
<br>
<br>

> Clone the project

```bash
git clone https://github.com/Reyansh-Khobragade/rey-stalker
```

> Go to the projects's working directory

```bash
cd rey-stalker
```

> Fill in the config.sjon file

1. Token

#### Go to [Discord Developer portal](https://discord.com/developers/applications) and make a new application

<center><img height="300" src="https://cdn.discordapp.com/attachments/848821496540430356/913081216792686592/unknown.png"></center>

#### Add it to bot

<center><img src="https://cdn.discordapp.com/attachments/848821496540430356/913082323552043018/unknown.png"></center>

#### Get the Token, scroll down turn on message content intent

<center><img src="https://cdn.discordapp.com/attachments/848821496540430356/913082680898375691/unknown.png"><img src="https://cdn.discordapp.com/attachments/848821496540430356/913082740688166982/unknown.png"></center>

2. Owner ID

Enable Developer options in your Discord app and right click on your profile and get you ID

<center><img height="300" src="https://cdn.discordapp.com/attachments/848821496540430356/913084523204448306/unknown.png"><img  src="https://cdn.discordapp.com/attachments/848821496540430356/913085020044926976/unknown.png"></center>

3. Prefix

Your preferred prefix

4. Stalk Timeout

Time interval between screenshots

> Install the nodejs dependencies

```bash
npm install
```

> Run the bot

```bash
node index.js
```
