import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["DAPP"];
    const quote = tokens["BNT"];
    const quantity = number_to_asset(AMOUNT * 300, base.get_symbol());

    // bancor
    const reserve = "bancorc11154";

    return await transact( account, quantity, base, quote, reserve);
}

if (require.main === module) {
    mine(ACCOUNT);
}