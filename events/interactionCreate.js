const { Events } = require('discord.js');
const { guildId } = require('../config.json');
const { defaultRoles, channels, functions } = require('../utils/data.js');

module.exports = {
	name: Events.InteractionCreate,
	on: true,
	async execute(interaction, bot) {
		if (interaction.isButton()) {
			const myGuild = bot.guilds.cache.get(guildId);
			let role = myGuild.roles.cache.get(defaultRoles[interaction.customId]);

			if(!role) return interaction.reply({content: `${interaction.customId} Role not found`, ephemeral: true});			
			
			await functions.addRole(interaction, role)
				.catch(error => {
					console.log(error);
					return interaction.reply({content: `Something went wrong`, ephemeral: true})
				});	
			let rulesChannel = bot.channels.cache.get(channels.rulesChannel);

			//Данные строки кода можно удалить, эта команда удаляет два последних сообщения в основном канале:
			rulesChannel.bulkDelete(2)
				.then(messages => console.log(`Bulk deleted ${messages.size} messages`))
				.catch(console.error);						
		}

		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			command.execute(interaction, bot);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};