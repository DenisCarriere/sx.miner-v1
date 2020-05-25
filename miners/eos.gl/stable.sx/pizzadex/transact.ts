import { Asset, Name, ExtendedSymbol } from "eos-common";
import { api } from "../../../../src/config"
import { gl, flash, stableSx, pizzadex } from "../../../../plugins"
import * as utils from "../../../../src/utils";

export async function transact( account: Name, quantity: Asset, base_ext_sym: ExtendedSymbol, quote_ext_sym: ExtendedSymbol, sx_ext_sym: ExtendedSymbol, pair: string, type: string ) {
    // calculations
    const { out } = await gl.get_calculate_rate( quantity, base_ext_sym, quote_ext_sym );

    // get `stablestable` contract balance
    const sx_rate = await stableSx.get_calculate_rate( out, sx_ext_sym.get_symbol().code() );

    // actions
    const actions = [
        flash.savebalance( account, base_ext_sym.get_contract(), base_ext_sym.get_symbol().code() ),
        gl.buymarket( account, base_ext_sym.get_contract(), quantity, quote_ext_sym.get_symbol().code() ),
        stableSx.buymarket( account, quote_ext_sym.get_contract(), out, sx_ext_sym.get_symbol().code() ),
        pizzadex.buymarket( account, sx_ext_sym.get_contract(), sx_rate.out, pair, type ),
        flash.checkbalance( account, base_ext_sym.get_contract(), base_ext_sym.get_symbol().code() ),
    ]

    // push transaction
    return utils.transact( api, actions )
}