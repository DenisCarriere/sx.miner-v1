import { transact } from "./transact";
import { Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["FAST"];
    const quote = tokens["EOS"];
    const quantity = number_to_asset(AMOUNT * 50000, base.get_symbol());

    // newdex
    const code = "fastecoadmin-fast-eos";
    const type = "buy";

    return await transact( account, quantity, base, quote, code, type );
}

if (require.main === module) {
    mine(ACCOUNT);
}
