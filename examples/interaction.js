const { RedditImage } = require('../dist')
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const reddit = new RedditImage()

client.on('interaction', async interaction => {
    if (interaction.commandName == 'reddit') {
        const string = interaction.options.getString('input');
        await reddit.fetch({
            reddit: string, // (required) subreddit name to find pictures
            limit: 2000, // (optional) the number of pictures among which you will get 1 random one
            sort: 'top', // (optional) a rather useless option, because the pictures are given out randomly
            time: 'hour' // (optional) how old are the pictures you want to get
        })
        interaction.reply({ embeds: [reddit] })
    }
})

client.login(token)