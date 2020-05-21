// import * as StableEOSDTUSDT from
// import * as StableUSDTEOSDT from "./eos.gl/stable.sx/USDT-EOSDT"

import { Name } from "eos-common";

interface Miners {
    [miner: string]: {
        [exchange: string] : {
            [pair: string]: {
                mine: (miner: Name) => Promise<string>
            }
        }
    }
}

export const miners: Miners = {
    "swap.sx": {
        "newdex": {
            "EOS-DAPP": require("./swap.sx/newdex/EOS-DAPP")
        },
    },
    "eos.gl": {
        "bancor.v1": {
            "BNT-EOS": require("./eos.gl/bancor.v1/BNT-EOS"),
            "EOS-BNT": require("./eos.gl/bancor.v1/EOS-BNT"),
            "BNT-EOSDT": require("./eos.gl/bancor.v1/BNT-EOSDT"),
            "EOSDT-BNT": require("./eos.gl/bancor.v1/EOSDT-BNT"),
        },
        "bancor.v2": {
            "BNT-EOS": require("./eos.gl/bancor.v2/BNT-EOS"),
            "EOS-BNT": require("./eos.gl/bancor.v2/EOS-BNT"),
        },
        "newdex": {
            "EOS-EOSDT": require("./eos.gl/newdex/EOS-EOSDT"),
            "EOS-FAST": require("./eos.gl/newdex/EOS-FAST"),
            "EOSDT-EOS": require("./eos.gl/newdex/EOSDT-EOS"),
            "FAST-EOS": require("./eos.gl/newdex/FAST-EOS"),
        },
        "stable.sx-bancor.v1": {
            "BNT-EOSDT-USDT": require("./eos.gl/stable.sx/bancor.v1/BNT-EOSDT-USDT"),
        },
        "stable.sx-bancor.v2": {
            "BNT-EOSDT-USDB": require("./eos.gl/stable.sx/bancor.v2/BNT-EOSDT-USDB"),
        },
        "stable.sx-newdex.swap": {
            "EOS-EOSDT-USN": require("./eos.gl/stable.sx/newdex.swap/EOS-EOSDT-USN"),
        },
        "stable.sx-pizzadex": {
            "EOS-EOSDT-USDE": require("./eos.gl/stable.sx/pizzadex/EOS-EOSDT-USDE"),
        },
        "stable.sx-pizzaswap": {
            "EOS-EOSDT-USDE": require("./eos.gl/stable.sx/pizzaswap/EOS-EOSDT-USDE"),
        },
        "yolo": {
            "BNT-EOS": require("./eos.gl/yolo/BNT-EOS"),
            "EOS-BNT": require("./eos.gl/yolo/EOS-BNT"),
            "EOS-EOSDT": require("./eos.gl/yolo/EOS-EOSDT"),
            "EOSDT-EOS": require("./eos.gl/yolo/EOSDT-EOS"),
        }
    }
}
