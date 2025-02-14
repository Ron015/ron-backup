import type { BanData, ChannelsData, CreateOptions, EmojiData, RoleData } from './types';
import type { Guild } from 'discord.js-selfbot-v13';
import { MemberData } from './types/MemberData';
/**
 * Returns an array with the banned members of the guild
 * @param {Guild} guild The Discord guild
 * @returns {Promise<BanData[]>} The banned members
 */
export declare function getBans(guild: Guild): Promise<BanData[]>;
/**
 * Returns an array with the members of the guild
 * @param {Guild} guild The Discord guild
 * @returns {Promise<MemberData>}
 */
export declare function getMembers(guild: Guild): Promise<MemberData[]>;
/**
 * Returns an array with the roles of the guild
 * @param {Guild} guild The discord guild
 * @returns {Promise<RoleData[]>} The roles of the guild
 */
export declare function getRoles(guild: Guild): Promise<RoleData[]>;
/**
 * Returns an array with the emojis of the guild
 * @param {Guild} guild The discord guild
 * @param {CreateOptions} options The backup options
 * @returns {Promise<EmojiData[]>} The emojis of the guild
 */
export declare function getEmojis(guild: Guild, options: CreateOptions): Promise<EmojiData[]>;
/**
 * Returns an array with the channels of the guild
 * @param {Guild} guild The discord guild
 * @param {CreateOptions} options The backup options
 * @returns {ChannelData[]} The channels of the guild
 */
export declare function getChannels(guild: Guild, options: CreateOptions): Promise<ChannelsData>;
