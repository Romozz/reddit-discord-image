import { MessageEmbed, Message, CommandInteraction } from 'discord.js';
import fetch from 'node-fetch'
export function reddit(message: Message | CommandInteraction, reddit: string, limit: number = 1000, sort: 'hot' | 'new' | 'top' = 'hot', time: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all' = 'all') {
  fetch(`https://www.reddit.com/r/${reddit}.json?limit=${limit}&?sort=${sort}&t=${time}`)
        .then(res => res.json())
        .then(json => json.data.children).then(posts => {
        const {title, url, subreddit, link_flair_background_color, subreddit_subscribers, ups, author} = posts[Math.floor(Math.random() * posts.length)].data;
         const embed = new MessageEmbed()
    .setTitle(`**${title}**`)
    .setAuthor(`${author}, ${ups}\👍`)
    .setURL(url)
    .setImage(url)
    .setColor(link_flair_background_color)
    .setFooter(`r/${subreddit}, ${subreddit_subscribers} subscribers`)
    message.reply({ embeds: [embed], allowedMentions: { parse: [] } })
      })
    }