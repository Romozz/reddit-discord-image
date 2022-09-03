import { CommandInteraction, Message } from 'discord.js';
/**
 * Random image from subreddit in discord embed. ⚠️ If you specified NSFW subreddit i recomended setupNSFW mark on your channel in discord
 * @param message Message or interaction.
 * @param reddit Subreddit name for search pictures
 * @param limit limit of posts to search in subreddit
 * @param sort Select sort type of posts (maybe uselessly to posts everything randomizing). Default `hot`.
 * @param time Time type of posts. Default `all`.
 * @returns {Message}
 */
export declare function reddit(message: Message | CommandInteraction, reddit: string, limit?: number, sort?: 'hot' | 'new' | 'top', time?: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'): Message;
