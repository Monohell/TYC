const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fs = require("fs")

    client.on("message", msg => {

        // Exit and stop if there's not prefix
        if (!msg.content.startsWith(config.prefix)) return;
       
        // Prevents bot responding to other bots
        if(msg.author.bot) return;

        // Operator Code
        if (msg.content.startsWith(config.prefix + "ping")) {
            msg.channel.sendMessage("pong!");
        }
        else if(msg.content.startsWith(config.prefix + "foo")) {
            msg.channel.sendMessage("bar!")
        }        
    });
    
    client.on('ready', () => {
        console.log('I am ready!');
    });

// Prefix changing command, Curently not working.
//    if(msg.content.startsWith(config.prefix + "prefix")){
//    // get arguments for the command, as: !prefix +
//    let args = msg.content.split(" ").slice(1);
//    // change the configuration in memory
//    config.prefix = args[0];
//    // Now we have to save the file.
//    fs.writeFile('./config.json', JSON.stringify(config), (err) => {if(err) console.error(err)});
//}

    client.on("guildMemberAdd", (member) => {
        console.log("New user " + member + "has joined.");
        member.guild.sendMessage("275785976834555915", "Welcome " + member + " to _The Yiff Club_! Please introduce yourself in the introductions chanel, if you have any questions please contact any of the server Admins, <@181807141819121674>,  <@99905164541976576>, <@136631688158642176>, <@82211255883935744>, <@190886584302829578>, <@148171577865797632> or <@246391569656053760> - We hope you enjoy your stay!");
        //member.guild.defaultChannel.sendMessage("Welcome " + member + " to _The Yiff Club_! Please introduce yourself in the introductions chanel, if you have any questions please contact any of the server Admins, <@181807141819121674>,  <@99905164541976576>, <@136631688158642176>, <@82211255883935744>, <@190886584302829578>, <@148171577865797632> or <@246391569656053760> - We hope you enjoy your stay!");
    });

client.login(config.token);
