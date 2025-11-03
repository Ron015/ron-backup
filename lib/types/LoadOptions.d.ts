import { MessageMentionOptions } from "discord.js-selfbot";
export interface LoadOptions {
    clearGuildBeforeRestore: boolean;
    maxMessagesPerChannel?: number;
    allowedMentions?: MessageMentionOptions;
}
