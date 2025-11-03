import { TextBasedChannelTypes, VoiceBasedChannelTypes, ThreadChannelTypes } from 'discord.js-selfbot';
import { ChannelPermissionsData } from './';
export interface BaseChannelData {
    type: TextBasedChannelTypes | VoiceBasedChannelTypes | ThreadChannelTypes;
    name: string;
    parent?: string;
    permissions: ChannelPermissionsData[];
}
