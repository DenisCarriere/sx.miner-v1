import * as dotenv from "dotenv"
import { Api, JsonRpc } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
import { createDfuseClient, FileApiTokenStore } from "@dfuse/client";
const { TextEncoder, TextDecoder } = require('util');
dotenv.config();

const fetch = require('node-fetch');
;(global as any).fetch = fetch;
;(global as any).WebSocket = require("ws");

dotenv.config();

if (!process.env.DFUSE_TOKEN) throw new Error("[DFUSE_TOKEN] is required");
if (process.env.DFUSE_TOKEN.includes("PRIVATE")) throw new Error("[DFUSE_TOKEN] invalid token")

export const apiKey = process.env.DFUSE_TOKEN || '';

export const client = createDfuseClient({
    apiKey: process.env.DFUSE_TOKEN,
    apiTokenStore: new FileApiTokenStore("dfuse-token.json"),
    network: "mainnet"
})

export const endpoint = process.env.NODEOS_ENDPOINT || "http://localhost:8888";
export const rpc = new JsonRpc(endpoint, { fetch });

if (!process.env.MINER) throw new Error("[MINER] is required");
if (!process.env.CPU_PAYER) throw new Error("[CPU_PAYER] is required");
if (!process.env.QUANTITY) throw new Error("[QUANTITY] is required");
if (!process.env.PRIVATE_KEYS) throw new Error("[PRIVATE_KEYS] is required");
if (process.env.PRIVATE_KEYS.includes("PRIVATE")) throw new Error("[PRIVATE_KEYS] invalid key")

export const signatureProvider = new JsSignatureProvider(process.env.PRIVATE_KEYS.split(","));
export const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

export const MINER = string_to_permission(process.env.MINER);
export const CPU_PAYER = string_to_permission(process.env.CPU_PAYER);
export const QUANTITY = process.env.QUANTITY;
export const PROFIT = process.env.PROFIT;
export const AUTHORIZATION = [
    CPU_PAYER,
    MINER
]

function string_to_permission( str: string ) {
    if ( !str || !str.includes("@") ) throw new Error("permission string must include @");
    const [ actor, permission ] = str.split("@");
    return { actor, permission }
}

console.log("Configurations")
console.log("==============")
console.log("NODEOS_ENDPOINT:", endpoint);
console.log("MINER:", MINER);
console.log("CPU_PAYER:", CPU_PAYER);
console.log("QUANTITY:", QUANTITY);
console.log("PROFIT:", PROFIT);
console.log("==============")