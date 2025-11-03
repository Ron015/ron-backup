import { ThreadAutoArchiveDuration, ThreadChannelTypes } from "discord.js-selfbot";
import { MessageData } from "./MessageData";
export interface ThreadChannelData {
    type: ThreadChannelTypes;
    name: string;
    archived: boolean;
    autoArchiveDuration: ThreadAutoArchiveDuration;
    locked: boolean;
    rateLimitPerUser: number;
    messages: MessageData[];
}
