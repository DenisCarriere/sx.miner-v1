import { Action, Authorization } from "eosjs/dist/eosjs-serialize";
import { Name, Asset } from "eos-common";

export function borrow( to: Name, contract: Name, quantity: Asset, memo = "", notifiers?: Name[], authorization?: Authorization[] ): Action {
    return {
        account: "flash.sx",
        name: "checkbalance",
        authorization: authorization || [ { actor: to.to_string(), permission: "active" } ],
        data: {
            to: to.to_string(),
            contract: contract.to_string(),
            quantity: quantity.to_string(),
            memo,
            notifiers: notifiers.map(i => i.to_string()),
        }
    }
}

export function checkbalance( account: Name, contract: Name, quantity: Asset, authorization?: Authorization[] ): Action {
    return {
        account: "flash.sx",
        name: "checkbalance",
        authorization: authorization || [ { actor: account.to_string(), permission: "active" } ],
        data: {
            account: account.to_string(),
            contract: contract.to_string(),
            quantity: quantity.to_string(),
        }
    }
}