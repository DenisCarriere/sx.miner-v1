import { Asset, SymbolCode } from "eos-common";
import { rpc } from "../../src/config"
import * as sx from "sxjs";

export async function get_calculate_rate( quantity: Asset, symcode: SymbolCode ) {
    const settings = {fee: 20, amplifier: 10}
    const tokens = await sx.get_tokens( rpc, "swap.sx" );

    return sx.get_rate( quantity, symcode, tokens, settings );
}
