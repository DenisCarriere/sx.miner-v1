import { transact } from "./transact";
import { name, Name, number_to_asset } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT, AMOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const base = tokens["EOS"];
    const quote = tokens["BNT"];
    const quantity = number_to_asset(AMOUNT * 1, base.get_symbol());

    // bancor
    const reserve = "bancorcnvrtr:EOSBNT";

    return await transact( account, quantity, base, quote, reserve);
}

if (require.main === module) {
    mine(ACCOUNT);
}