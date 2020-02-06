import { InboundMessageType, InboundMessage, ActionTraceData } from "@dfuse/client";
import { client, MINER, QUANTITY, PROFIT } from "./src/config";
import { autoconvert } from "./src/actions";

client.streamActionTraces( { accounts: "stablestable", action_names: "receipt" },
  (message: InboundMessage<any>) => {
    if (message.type == InboundMessageType.LISTENING) console.log('\nsx.miner listening...');
    if (message.type == InboundMessageType.ACTION_TRACE) {
      const act = (message.data as ActionTraceData<any>).trace.act;
      const { owner, action, assets } = act.data;

      if ( action == "convert") {
        console.log(`🚀 *${owner}* converts \`${assets[0]} => ${assets[1]}\``);
        autoconvert( MINER.actor, QUANTITY, PROFIT );
      }
    }
  }
)
