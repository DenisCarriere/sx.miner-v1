import { Action, Authorization } from "eosjs/dist/eosjs-serialize";
import { Name, Asset, SymbolCode, ExtendedSymbol } from "eos-common";

export function borrow( to: Name, contract: Name, quantity: Asset, memo = "", notifier?: Name, authorization?: Authorization[] ): Action {
    return {
        account: "flash.sx",
        name: "checkbalance",
        authorization: authorization || [ { actor: to.to_string(), permission: "active" } ],
        data: {
            to: to.to_string(),
            symcodes: contract.to_string(),
            quantity: quantity.to_string(),
            memo,
            notifier: notifier.to_string()
        }
    }
}

export function checkbalance( account: Name, symcodes: ExtendedSymbol[], authorization?: Authorization[] ): Action {
    return {
        account: "flash.sx",
        name: "checkbalance",
        authorization: authorization || [ { actor: account.to_string(), permission: "active" } ],
        data: {
            account: account.to_string(),
            symcodes: symcodes.map( row => {
                const sym = `${row.get_symbol().precision()},${row.get_symbol().code().to_string()}`;
                return { sym, contract: row.get_contract().to_string() }
            }),
        }
    }
}

export function savebalance( account: Name, symcodes: ExtendedSymbol[], authorization?: Authorization[] ): Action {
    return {
        account: "flash.sx",
        name: "savebalance",
        authorization: authorization || [ { actor: account.to_string(), permission: "active" } ],
        data: {
            account: account.to_string(),
            symcodes: symcodes.map( row => {
                const sym = `${row.get_symbol().precision()},${row.get_symbol().code().to_string()}`;
                return { sym, contract: row.get_contract().to_string() }
            }),
        }
    }
}
