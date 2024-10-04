const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("PayAsYouGoModule", (m) => {
   

  const payGo = m.contract("PayAsYouGoElectricity");

  return { payGo };
});
