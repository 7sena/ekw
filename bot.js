console.log(`Online`);
const Discord = require('discord.js');
const client = new Discord.Client();
var ServerID = "505995244672909323"; 
var ChannelID = "515406110325211136";
 console.log(`Online`);
client.on('ready', async() => {
    setInterval(()=>{
    client.guilds.get(ServerID).channels.get(ChannelID).send('**Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king ,Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large erore king , Legends NetWork Large , **')
    },205);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "2say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.login("NDczMTAzMTU1MzUwMDc3NDUx.DrebFA.64rY18JFcZJ9FjFUoEi_5qBZHaU");
