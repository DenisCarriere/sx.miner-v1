
import { ExtendedSymbol, SymbolCode } from "eos-common";

export const tokens: { [symcode: string]: ExtendedSymbol } = {
    "FAST": new ExtendedSymbol("4,FAST", "fastecoadmin"),
    "EOS": new ExtendedSymbol("4,EOS", "eosio.token"),
    "GL": new ExtendedSymbol("4,GL", "token.gl"),
    "USDT": new ExtendedSymbol("4,USDT", "tethertether"),
    "EOSDT": new ExtendedSymbol("9,EOSDT", "eosdtsttoken"),
    "BNT": new ExtendedSymbol("10,BNT", "bntbntbntbnt"),
    "PBTC": new ExtendedSymbol("8,PBTC", "btc.ptokens"),
    "CHEX": new ExtendedSymbol("8,CHEX", "chexchexchex"),
    "USDB": new ExtendedSymbol("4,USDB", "usdbusdbusdb"),
    "SENSE": new ExtendedSymbol("4,SENSE", "sensegenesis")
}

export function get_symbol( symcode: SymbolCode ) {
    return tokens[symcode.to_string()].get_symbol();
}

export function get_contract( symcode: SymbolCode ) {
    return tokens[symcode.to_string()].get_contract().to_string();
}