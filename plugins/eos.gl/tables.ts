import { Asset, SymbolCode } from "eos-common";
import { rpc } from "../../src/config"
import * as sx from "sxjs";

export async function get_calculate_rate( quantity: Asset, symcode: SymbolCode ) {
    const settings = {fee: 20, amplifier: 3}
    const tokens = await sx.get_tokens( rpc, "eos.gl" );

    return sx.get_rate( quantity, symcode, tokens, settings );
}
