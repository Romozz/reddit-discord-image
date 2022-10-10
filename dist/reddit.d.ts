import { SortResolvable } from '../types/SortResolvable';
import { TimeResolvable } from '../types/TimeResolvable';
export declare class RedditImage {
    type: string;
    title: string | null;
    description: string | null;
    url: string | null;
    color: number | null;
    timestamp: null;
    fields: [];
    thumbnail: null;
    image: {
        url: string | null;
    };
    video: null;
    author: {
        name: string | null;
        url: string | null;
        icon_url: string | null;
    };
    provider: null;
    footer: {
        text: string | null;
        icon_url: string | null;
    };
    reddit: string;
    fetch({ reddit, limit, sort, time }: {
        reddit: string;
        limit: number;
        sort: SortResolvable;
        time: TimeResolvable;
    }): Promise<void>;
}
