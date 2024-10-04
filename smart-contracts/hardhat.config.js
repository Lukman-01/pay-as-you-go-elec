require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.26",
  networks: {
    // for testnet
    "lisk-sepolia": {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
      "lisk-sepolia": "123",
    },
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};



// require('@nomicfoundation/hardhat-toolbox');
// const dotenv = require("dotenv");
// dotenv.config();

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: '0.8.18',
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     arbitrumSepolia: {
//       url: 'https://sepolia-rollup.arbitrum.io/rpc',
//       chainId: 421614,
//       accounts: [process.env.PRIVATE_KEY]
//     },
//     arbitrumOne: {
//       url: 'https://arb1.arbitrum.io/rpc',
//       //accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
//     },
//   },
// };


// // 0x7042153d890F545E1fACaea4363DA2A861e546fC

