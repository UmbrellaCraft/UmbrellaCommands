const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("hola")) {
    message.channel.send("Hola que tal!");
  }else
    if (message.content.startsWith("adios")) {
    message.channel.send("Hasta luego!");
});
client.login("OTA4MDg2MzgyNTIwNTk4NTI5.YYwnWQ.PIxhHVAaPt_tWQmdtIVOZl-u_fw");
