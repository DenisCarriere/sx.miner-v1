import { Asset, Name, ExtendedSymbol } from "eos-common";
import { api } from "../../../src/config"
import { swapSx, bancor, flash } from "../../../plugins"
import * as utils from "../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, reserve: string ) {
    // calculations
    const { out } = await swapSx.get_calculate_rate( quantity, base_ext_sym, quote_ext_sym );

    // actions
    const actions = [
        flash.savebalance( account, base_ext_sym.get_contract(), base_ext_sym.get_symbol().code() ),
        swapSx.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        bancor.buymarket( account, quote_ext_sym.get_contract(), out, reserve, base_ext_sym.get_symbol().code() ),
        flash.checkbalance( account, base_ext_sym.get_contract(), base_ext_sym.get_symbol().code() ),
    ]

    // push transaction
    return utils.transact( api, actions )
}