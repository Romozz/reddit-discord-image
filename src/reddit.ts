/* deepscan-disable */
import { SortResolvable } from  '../types/SortResolvable';
import { TimeResolvable } from  '../types/TimeResolvable';

import fetch from 'node-fetch'

export class RedditImage {
  
    public type: string;
    public title: string | null;
    public description: string | null;
    public url: string | null;
    public color: number | null;
    public timestamp: null;
    public fields: [];
    public thumbnail: null;
    public image: { url: string | null; };
    public video: null;
    public author: {
      name: string | null,
      url: string | null,
      icon_url : string | null
    };
    public provider: null;
    public footer: {
      text: string | null,
      icon_url: string | null
    };
    public reddit: string; 
    async fetch({ reddit, limit, sort, time }: { reddit: string; limit: number; sort: SortResolvable; time: TimeResolvable; }){
      const that: RedditImage = this
      if(!sort) sort = 'hot'
      if(!limit) limit = 1000
      if(!time) time = 'all'
        const response = await fetch(`https://www.reddit.com/r/${reddit}.json?limit=${limit}&?sort=${sort}&t=${time}`)
        const response_json = await response.json()
        const response_json_items = await response_json.data?.children.filter((info: { data: { url: string; }; }) => info.data.url.endsWith('.png')
        || info.data.url.endsWith('.jpg')
        || info.data.url.endsWith('.jpeg')
        || info.data.url.endsWith('.png'))
        if(!reddit || !response_json_items){
          this.type = 'rich'
        this.title = `❌You not specified correct subreddit name to find images`
        this.color = 16711711
        } else {
          var { title, url, subreddit, link_flair_background_color, subreddit_subscribers, ups, author } = response_json_items[Math.floor(Math.random() * response_json_items.length)].data;
          this.type = 'rich'
          this.title = `**${title}**`
          this.url = url
          this.color = link_flair_background_color
          this.image = { url: url }
          this.author = {
            name: `${author}, ${ups}\👍`,
            url: null,
            icon_url: null
          }
          this.footer = {
            text: `r/${subreddit}, ${subreddit_subscribers} subscribers`,
            icon_url: null
          }
        }
    }
  }
