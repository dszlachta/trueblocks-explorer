# TrueBlocks Account Explorer

![Image Logo](https://avatars1.githubusercontent.com/u/19167586?s=200&v=4)

[![Website](https://img.shields.io/badge/Website-quickblocks.io-brightgreen.svg)](https://quickblocks.io/)
[![TrueBlocks](https://img.shields.io/badge/Trueblocks-explorer-blue.svg)](https://github.com/Great-Hill-Corporation/trueblocks-explorer)
[![React](https://img.shields.io/badge/React-node.js-purple.svg)](https://reactjs.org/)
[![Twitter](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Twitter)](https://twitter.com/quickblocks?lang=es)

TrueBlocks creates an index of address appearances on commerial grade hardware, enabling fast access to a full list of transactions for any Ethereum address or list of addresses. This allows us to create, for the first time, a 100% fully decentralized blockchain browsing experience -- this means 100% private.

## Installation

#### Installing Core

Download and install the **trueblocks-core**. For detailed instructions for your operating system including setting up the build environment, see this page: [trueblocks-core](http://github.com/Great-Hill-Corporation/trueblocks-core/).

```
git clone https://github.com/Great-Hill-Corporation/trueblocks-core
cd trueblocks-core
mkdir build && cd build
cmake ../src
make
```

Make sure to add trueblocks' **bin** folder (./trueblocks-core/bin) to your **$PATH**

#### Installing UI, API, and Docs

Once that's done, follow these steps:

```
git clone https://github.com/Great-Hill-Corporation/trueblocks-explorer
cd trueblocks-explorer
yarn global add foreman
yarn install
nf start
```

Your should see the **TrueBlocks Account Explorer** screen.

## Requirements

- Note: In order for the application to work, you must have an available Parity Ethereum node running. TrueBlocks defaults to the RPC endpoint at http://localhost:8545, but you may use any endpoint. Performance of the application will be greatly reduced if you're not running a local node. A good solution is to run your own node on the dAppNode or Ava.do platform and use the TrueBlocks docker image.

## Getting Data

Assuming you've installed TrueBlocks correctly and you have an available node endpoint, you should be able to run this command:

```
chifra blocks 100
```

and get valid Ethereum data, such as this:

```
{
  "data": [
    {
      "gasLimit": 5000,
      "gasUsed": 0,
      "hash": "0xdfe2e70d6c116a541101cecbb256d7402d62125f6ddc9b607d49edc989825c64",
      "blockNumber": 100,
      "parentHash": "0xdb10afd3efa45327eb284c83cc925bd9bd7966aea53067c1eebe0724d124ec1e",
      "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
      "difficulty": 17916437174,
      "price": 0,
      "finalized": true,
      "timestamp": 1438270443,
      "transactions": []
    }
  ]
}
```

Do this command to generate a ton of data:

```
chifra blocks 0-latest

or

chifra blocks 0-latest:10000 (for every 10,000th block)
```

This will export JSON data for every block in the chain to your screen. There are many other options to `chifra`.

### Using the API

`Chifra` provides data to TrueBlocks API, so assuming things are installed correctly (please let us know what doesn't work), you should be able to stand up a local API to deliver this same data:

```
curl http://localhost:8080/help
```

The same commands available through `chifra` on teh command line should be availble through the API.


From your host machine, you can direct curl commands to your TrueBlocks docker container's http server (default port 80) in order to get your data.

Examples:

- Get all JSON exported for specific address:
    - `curl http://localhost/export?address=0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359`
- Get `{blockNumber, txIndex}` appearances for specific address: `curl http://localhost/list?address=0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359`


### Prerequisites

| component | notes |
|-----------|-------|
| git       | Install the command line tool. [Instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|
| docker    | Install *docker* ([Instructions](https://docs.docker.com/engine/installation)).<br>- The community edition of docker (`docker-ce`) works fine.<br>- On Linux, grant permission to the current user to run docker (`sudo usermod -aG docker $USER`). |
| docker-compose | Install [docker-compose](https://docs.docker.com/compose/install) |

**Note**: Make sure that you are able to run `git`, `docker ps`, `docker-compose` without issue, and that you can do so without using the `sudo` command. (see [Troubleshooting](#troubleshooting))

## Helpful commands

### Start the TrueBlocks Docker Image
```
$ docker-compose up -d
```

### Stop
```
$ docker-compose down
```

### Status
```
$ docker-compose ps
```

### Logs
```
$ docker-compose logs -f
```

## Running on DappNode

Building and running the TrueBlocks docker image is taken care of by the dAppNode package manager. If you are running a dAppNode, you can simply install the package from the dAppNode package manager.

Note: your DappNode doesn't run Parity with `--tracing=on` by default. Set `EXTRA_OPTS=--tracing on` in the dappnode admin panel ([image](https://user-images.githubusercontent.com/21328788/52904014-04ab6c00-3226-11e9-8c47-747a42b22169.png)) or setting it in DNP_ETHCHAIN's ethchain.dnp.dappnode.eth.env file (see [Why do we need --tracing enabled?](#why-do-we-need-tracing-enabled))

## FAQ

### I'm running geth, do I need to run Parity instead?
Yes - Parity delivers the necessary articulated traces so that TrueBlocks can build its address index. We don't yet support Geth.

### What is my RPC endpoint?

That depends on how you've configured your parity node. some endpoints that we use are http://172.17.0.1:8545 (when running node on linux host), http://docker.for.mac.localhost:8545 (when running node on mac host), and http://my.ethchain.public.dappnode.eth:8545 (when running node on dappnode). http://localhost:8545 is a common guess, but docker has its own networking paradigm; don't be surprised if this RPC endpoint choice doesn't yield results.

Parity's default http RPC port is 8545, but your node could be configured differently.

### Why does it take so long to build the index?
TrueBlocks has to manually process every single block in the history of the Ethereum chain. Additionally, it has to descend into every transaction trace. Often, traces are deeply layered (traces of traces of traces of ... traces), and this takes time to 1) fetch from your node's RPC and 2) extract addresses.

### Why do we need tracing enabled?

By visiting every bit of the Ethereum data including blocks, transactions, receipts, logs, traces, trace actions, and trace results for every block, TrueBlocks is able to extract every 'appearance' of an address on the blockchain. TrueBlocks can only do this with a tracing node.

### How do you recommend I run a node?

You can run a node with the [DNP_ETHCHAIN](https://github.com/dappnode/DNP_ETHCHAIN) package - set `EXTRA_OPTS=--tracing on` in the dappnode admin panel or setting it in DNP_ETHCHAIN's ethchain.dnp.dappnode.eth.env file (see [Why do we need --tracing enabled?](#why-do-we-need-tracing-enabled))

Otherwise, in order for TrueBlocks to work properly, you need to start parity with at least the following options:

```
parity --tracing on --jsonrpc-cors all --jsonrpc-hosts all --db-compaction=ssd 
```

`--db-compaction=ssd` is optional, but Parity recommends using an SSD drive for storing its data. Enabling `--tracing on` requires a re-sync of your node.

We also recommend (although, this is optional) that you specify an alternative path to store Parity's data (this will also require a re-sync of your node). We suggest an external 4TB SSD.

```
--db-path=/path/to/larger/hard/drive/      ; optionally add to the command line
```

Finally, TrueBlocks works equally with both tracing and archive nodes. You may start Parity as an archive node by adding the following option:

```
--pruning archive                          ; optionally add to the command line
```

(You will definitely want to use a larger hard drive in this case.)

## Troubleshooting

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Thomas Jay Rush** - [tjayrush](https://github.com/tjayrush)
* **Ed Mazurek** - [wildmolasses](https://github.com/wildmolasses)

See also the list of [contributors](https://github.com/Great-Hill-Corporation/trueblocks-docker/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

## References

[git](https://git-scm.com/)

[docker](https://www.docker.com/)

[docker-compose](https://docs.docker.com/compose/)

[TrueBlocks](https://www.quickblocks.io/)
