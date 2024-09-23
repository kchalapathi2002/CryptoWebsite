const { Web3 } = require('web3');

var web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/gUNaiIEovxGZqNXt9fJWv7AbXhT36wO4");

async function getLatestBlockNumber() {

    try {
        var blockNumber = (await web3.eth.getBlock('finalized')).number.toString();
        //console.log('Latest Block Number:', blockNumber);
        return blockNumber;
    } catch (error) {
        console.error('Error fetching block number:', error);
    }
}

module.exports = getLatestBlockNumber ;
