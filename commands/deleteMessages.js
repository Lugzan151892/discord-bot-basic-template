const {SlashCommandBuilder, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('delete')
        .setDescription('Удаляет указанное количество сообщений')        
        .addStringOption(option =>
            option.setRequired(true)
            .setName('amount')            
            .setDescription('How many messages to delete (only for Admin\'s)')
            .setDescriptionLocalization('ru', 'Сколько сообщений удалить (только для модераторов)')),            
    async execute(interaction) {
        let suggestion = interaction.options.getString('amount');
        let channel = interaction.channel;
        console.log(interaction.member);        
        if (interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            channel.bulkDelete(Number(suggestion))
                .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
                .catch(console.error);
        await interaction.reply({content: 'Сообщения удалены', ephemeral: true});
        } else {
            interaction.member.locale === 'ru' ? 
                await interaction.reply({content: 'У Вас недостаточно прав для данного действия', ephemeral: true}) : 
                await interaction.reply({content: 'You don\'t have permisson\'s to do this', ephemeral: true});   
        }
           
    }
}
