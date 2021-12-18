import {PersistentMap} from "near-sdk-as";

// @nearfile
export const LAST_SENDER_KEY  = "last_sender";
export const LAST_SENDER_KEY2 = "last_sende";
// TODO: Define data model here

export const messages = new PersistentMap<string, string>("emaimap");

