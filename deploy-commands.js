const {REST, Routes} = require('discord.js');
const { clientId, token } = require('./config.json');
const fs = require('node:fs');

//Собираем все файлы из папки ./commands в один массив и отправляем на сервер.
//Если структура Вашего приложения такая же, достаточно вызвать команду npm deploy

const commands = [];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const rest = new REST({version: '10'}).setToken(token);


for (let file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

(async () => {
    try {
        console.log(`Refreshing ${commands.length} commands...`);
        const refreshedCommands = await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands }
        )
        console.log(`${refreshedCommands.length} command\'s has been refreshed`);
    } catch(error) {
        console.log(error)
    }
})();