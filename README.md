# SX - Miner

## Install

```
git clone https://github.com/stableex/sx.miner.git
cd sx.miner
npm install
```

## Configure

Create `.env` file

```bash
# dfuse
DFUSE_TOKEN="<PRIVATE server_xxx>"
NODEOS_ENDPOINT="http://localhost:8888"

# sx.miner
QUANTITY="1.00 USD"
CPU_PAYER="myaccount@active"
AUTHORIZATION="myaccount@active"
PRIVATE_KEYS="<PRIVATE KEY>"
```

## Quickstart

```
$ npm start
```