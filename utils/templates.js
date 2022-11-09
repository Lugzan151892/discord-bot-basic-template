const {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require('discord.js');

module.exports = {
    roleButtons: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('csgo_player')
                .setLabel('I\'m CS:GO player')
                .setStyle(ButtonStyle.Success),            
            new ButtonBuilder()
                .setCustomId('hunt_player')
                .setLabel('I\'m Hunt player')
                .setStyle(ButtonStyle.Success),            
            new ButtonBuilder()
                .setCustomId('valorant_player')
                .setLabel('I\'m Valorant player')
                .setStyle(ButtonStyle.Success),            
            new ButtonBuilder()
                .setCustomId('guest')
                .setLabel('I\'m just a guest')                    
                .setStyle(ButtonStyle.Success)
        ),    
    roleEmbedRu: new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Пожалуйста выберите роль')
        .setDescription('От роли зависят каналы, которые Вы можете посещать'),
    roleEmbedEn: new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Please choose your role')
        .setDescription('Your role determines which channels you can visit'),
    languageButtons: new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('english_speaker')
                .setLabel('English')
                .setStyle(ButtonStyle.Success),            
            new ButtonBuilder()
                .setCustomId('russian_speaker')
                .setLabel('Russian')
                .setStyle(ButtonStyle.Success)           
        ),
    languageEmbedRu: new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Пожалуйста выберите язык')
        .setDescription('Бот будет отправлять сообщения на выбранном языке'),
    languageEmbedEn: new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Please select your language')
        .setDescription('Bot will send messages on your language')
}