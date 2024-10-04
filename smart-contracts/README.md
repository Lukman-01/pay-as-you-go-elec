# Pay-As-You-Go Electricity dApp

## Overview

The Pay-As-You-Go (PAYG) Electricity dApp allows users to manage electricity consumption transparently and decentralized. Users can top up electricity credits, and IoT smart meters deduct credits based on real-time usage. This contract is designed for deployment on the **Lisk Sepolia** network, ensuring low transaction fees and fast processing.

## Features

- **User Registration**: Admins can register users for electricity management.
- **Top-Up System**: Users can top up their electricity credits in tokens.
- **IoT Meter Integration**: Authorized smart meters deduct credits automatically based on usage.
- **Transparent Usage Tracking**: All transactions are recorded on the blockchain.
- **Owner Withdrawals**: The contract owner can withdraw funds collected from user payments.

## Use Cases

- **Residential Users**: Homeowners can top up and monitor electricity usage.
- **Remote Areas**: Provides electricity distribution in underserved locations.
- **Smart Cities**: Integration with IoT for automated energy management.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Lukman-01/pay-as-you-go-elec.git
   cd pay-as-you-go-elec/smart-contract
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with:
   ```bash
   PRIVATE_KEY=<your_private_key>
   ```

4. Compile the smart contracts:
   ```bash
   npx hardhat compile
   ```

5. Deploy on Lisk Sepolia:
   ```bash
   npx hardhat ignition deploy ./ignition/modules/deploy.js --network lisk-sepolia
   ```

Deployed Addresses

PayAsYouGoModule#PayAsYouGoElectricity - 0x1d87Db81f81F2A20F1Bf90B72E0d4ff6F2b2cD37

Verifying deployed contracts

Verifying contract "contracts/PayAsYouGo.sol:PayAsYouGoElectricity" for network lisk-sepolia...
Successfully verified contract "contracts/PayAsYouGo.sol:PayAsYouGoElectricity" for network lisk-sepolia:
  - https://sepolia-blockscout.lisk.com/address/0x1d87Db81f81F2A20F1Bf90B72E0d4ff6F2b2cD37#code


### Authors

Abdulyekeen Lukman(Ibukun)