const {SlashCommandBuilder} = require('discord.js');
const {roleButtons, roleEmbedRu, roleEmbedEn} = require('../utils/templates.js');
const {channels} = require('../utils/data.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addrole')
        .setDescription('Add a role'),
    async execute(interaction) {      
        if(interaction.member.roles.cache.some(item => item.name === 'Russian speaker')) {
            return await interaction.reply({content: 'Выберите роль', ephemeral: true, embeds: [roleEmbedRu], components: [roleButtons]})
                .catch(err => console.log(err));
        }
        return await interaction.reply({content: 'Choose your role', ephemeral: true, embeds: [roleEmbedEn], components: [roleButtons]})
            .catch(err => console.log(err));
    }
}