"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedditImage = void 0;
const node_fetch_1 = require("node-fetch");
class RedditImage {
    fetch({ reddit, limit, sort, time }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const that = this;
            if (!sort)
                sort = 'hot';
            if (!limit)
                limit = 1000;
            if (!time)
                time = 'all';
            const response = yield (0, node_fetch_1.default)(`https://www.reddit.com/r/${reddit}.json?limit=${limit}&?sort=${sort}&t=${time}`);
            const response_json = yield response.json();
            const response_json_items = yield ((_a = response_json.data) === null || _a === void 0 ? void 0 : _a.children.filter((info) => info.data.url.endsWith('.png')
                || info.data.url.endsWith('.jpg')
                || info.data.url.endsWith('.jpeg')
                || info.data.url.endsWith('.png')));
            if (!reddit || !response_json_items) {
                this.type = 'rich';
                this.title = `❌You not specified correct subreddit name to find images`;
                this.color = 16711711;
            }
            else {
                var { title, url, subreddit, link_flair_background_color, subreddit_subscribers, ups, author } = response_json_items[Math.floor(Math.random() * response_json_items.length)].data;
                this.type = 'rich';
                this.title = `**${title}**`;
                this.url = url;
                this.color = link_flair_background_color || 0e0;
                this.image = { url: url };
                this.author = {
                    name: `${author}, ${ups}\👍`,
                    url: null,
                    icon_url: null
                };
                this.footer = {
                    text: `r/${subreddit}, ${subreddit_subscribers} subscribers`,
                    icon_url: null
                };
            }
        });
    }
}
exports.RedditImage = RedditImage;
