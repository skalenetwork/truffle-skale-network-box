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
 * To set your environment variables (i.e. PRIVATE_KEY) create a file at the root 
 * of this project and name it .env.
 */
require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

const privateKeyOrMnemonic = process.env.PRIVATE_KEY || process.env.MNEMONIC;

const skale = process.env.SKALE_CHAIN;

module.exports = {

    /**
     * contracts_build_directory tells Truffle where to store compiled contracts
     */
    contracts_build_directory: './build/skale-contracts',

    /**
     * contracts_directory tells Truffle where the contracts you want to compile are located
     */
    contracts_directory: './contracts/skale',

    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        skale: {
            provider: () => new HDWalletProvider(privateKeyOrMnemonic, skale),
            gasPrice: 100000,
            network_id: "*",
            skipDryRun: true
        }
    }
}
