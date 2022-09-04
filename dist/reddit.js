"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reddit = void 0;
const discord_js_1 = require("discord.js");
const node_fetch_1 = require("node-fetch");
function reddit(message, reddit, limit = 1000, sort = 'hot', time = 'all') {
    node_fetch_1.default(`https://www.reddit.com/r/${reddit}.json?limit=${limit}&?sort=${sort}&t=${time}`)
        .then(res => res.json())
        .then(json => json.data.children).then(posts => {
        const { title, url, subreddit, link_flair_background_color, subreddit_subscribers, ups, author } = posts[Math.floor(Math.random() * posts.length)].data;
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`**${title}**`)
            .setAuthor(`${author}, ${ups}\👍`)
            .setURL(url)
            .setImage(url)
            .setColor(link_flair_background_color)
            .setFooter(`r/${subreddit}, ${subreddit_subscribers} subscribers`);
        message.reply({ embeds: [embed], allowedMentions: { parse: [] } });
    });
}
exports.reddit = reddit;
