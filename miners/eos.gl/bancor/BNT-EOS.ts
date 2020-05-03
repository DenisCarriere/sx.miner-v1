import { transact } from "./transact";
import { asset, name, Name } from "eos-common";
import { tokens } from "../../../src/tokens"
import { ACCOUNT } from "../../../src/config";

export async function mine( account: Name ) {
    const BNT = tokens["BNT"];
    const EOS = tokens["EOS"];
    await transact( account, asset("10.0000000000 BNT"), BNT, EOS, name("bnt2eoscnvrt"));
}

if (require.main === module) {
    mine(ACCOUNT);
}