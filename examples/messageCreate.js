const { RedditImage } = require('../dist')
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const reddit = new RedditImage()

client.on('messageCreate', async message => {
    if (message.content.startsWith('!reddit')) {
        const args = message.content.split(' ').splice(1)
        await reddit.fetch({
            reddit: args[0], // (required) subreddit name to find pictures
            limit: 1000, // (optional) the number of pictures among which you will get 1 random one
            sort: 'new', // (optional) a rather useless option, because the pictures are given out randomly
            time: 'week' // (optional) how old are the pictures you want to get
        })
        message.channel.send({ embeds: [reddit] })
    }
})

client.login(token)