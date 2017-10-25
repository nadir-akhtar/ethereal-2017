const HDWalletProvider = require("truffle-hdwallet-provider")
const mnemonic = "abstract rabbit pen excite one invest nothing satoshilist extend beef target"
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io"),
      network_id: "4",
      gas: 4712388,
      gasPrice: 25000000000
    }
  }
};