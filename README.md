<p align="center">
    <a href="https://www.npmjs.com/package/reddit-discord-image"><img src="https://badgen.net/npm/v/reddit-discord-image" alt="Npm package version"></a><a href="https://www.npmjs.com/package/reddit-discord-image"><img src="https://badgen.net/npm/dt/reddit-discord-image" alt="Npm package total downloads"></a>

</p>

# Installation
**Node.js 16.6.0 or newer is required**

```bash
$ npm install reddit-discord-image
```

## MessageCreate v13

```js
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
```

# Interaction v13

```js
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
```

More examples in <a href="https://github.com/Romozz/reddit-discord-image/tree/main/examples">examples</a>
