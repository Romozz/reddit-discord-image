<p align="center">
    <a href="https://www.npmjs.com/package/reddit-discord-image"><img src="https://badgen.net/npm/v/reddit-discord-image" alt="Npm package version"></a><a href="https://www.npmjs.com/package/reddit-discord-image"><img src="https://badgen.net/npm/dt/reddit-discord-image" alt="Npm package total downloads"></a>

</p>

# Installation
**Node.js 16.6.0 or newer is required**

```bash
$ npm install reddit-discord-image
```

## MessageCreate

```js
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const { reddit } = require('reddit-discord-image')

client.on('messageCreate', message => {
    const args = message.content.split(' ').splice(0)
    if(message.content.startsWith('!reddit')){
        reddit(message, args[0])
    }
})

client.login(token)
```

# Interaction

```js
const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const { reddit } = require('reddit-discord-image')

client.on('interaction', interaction => {
    if(interaction.commandName == 'reddit'){
        const string = interaction.options.getString('input');
        reddit(interaction, string)
    }
})

client.login(token)
```