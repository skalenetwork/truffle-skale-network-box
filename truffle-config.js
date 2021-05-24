/*
 * This truffle script will deploy your smart contracts to your SKALE Chain.
 * Check out this getting started guide for more information on using
 * your SKALE Chain:
 * 
 *   https://skale.network/docs/developers/getting-started/beginner
 *
 * @param {String} privateKey - Provide your wallet private key.
 * @param {String} provider - Provide your SKALE endpoint address.
 */


/*
 * To set your envorinment variables (i.e. PRIVATE_KEY) create a file at the root 
 * of this project and name it .env.
 */
require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

const privateKey = process.env.PRIVATE_KEY;

const skale = process.env.SKALE_CHAIN;

module.exports = {
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        skale: {
            provider: () => new HDWalletProvider(privateKey, skale),
            gasPrice: 0,
            network_id: "*",
            skipDryRun: true
        }
    }
}