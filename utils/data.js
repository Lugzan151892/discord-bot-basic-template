module.exports = {
    //Необходимо получить id используемых ролей и заменить их в данном файле.
    defaultRoles: {
        'csgo_player': '1038535733624963092',
        'hunt_player': '1038535604759183410',
        'valorant_player': '1038535357467197451',
        'guest': '1038535847139610674',
        'english_speaker': '1038535965481914478',
        'russian_speaker': '1038536074366025859'
    },
    channels: {
        'rulesChannel': '764907525313003542',
        'suggestionChannel': '1038534739377803284'
    },
    functions: {
        'addRole': 
        async function addRole(interaction, role) {
            if(interaction.member.roles.cache.some(item => item.name === role.name)) {
                if(interaction.member.roles.cache.some(item => item.name === 'russian_speaker')) return await interaction.reply({
                    content: `У вас уже есть эта роль - ${role}. Чтобы добавить другие роли и иметь возможность заходить в комнаты, введите команду \'/addrole\'`, 
                    ephemeral: true
                });
                return await interaction.reply({
                    content: `You already have this role - ${role}. To add other roles, and get an opportunity to join voice channels, use command: \'/addrole\'`, 
                    ephemeral: true
                });
            } else {
                await interaction.member.roles.add(role);
                if(interaction.member.roles.cache.some(item => item.name === 'Russian speaker')) {
                    return await interaction.reply({
                        content: `${role} добавлена Вам, ${interaction.member}. Чтобы добавить другие роли и иметь возможность заходить в комнаты, введите команду \'/addrole\'`,
                        ephemeral: true
                    });
                }
                return await interaction.reply({
                    content: `The ${role} role was added to you ${interaction.member}. To add other roles, and get an opportunity to join voice channels, use command: \'/addrole\'`,
                    ephemeral: true
                });
            }
        }
    }

}