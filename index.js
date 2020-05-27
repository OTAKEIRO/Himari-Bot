const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("NzE0OTE1MTI5MjgzNTc1ODM4.Xs3rgg.oF0Qt8bC6nCVB1Ra6jHs6_f03p8");
const newUsers = new Discord.Collection();

bot.once('ready', () => {
	console.log(`Bot online: ${bot.user.tag}!`);
});

bot.on('message', msg => {
	if (msg.content === '~oi') {
		msg.channel.send('Ola')
	}
	
	if (msg.content == "~clear") {
		if (msg.member.hasPermission("MANAGE_MESSAGES")) {
			msg.channel.fetchMessages().then(function(list) {
				msg.channel.bulkDelete(list);
			}, function(err) {
				msg.channel.send("Erro: Não consegui limpar '-'")
			})
		}
	}
});