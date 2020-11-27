var DigitalAsset = artifacts.require("DigitalAsset");

module.exports = function(deployer) {
  deployer.deploy(DigitalAsset,'TestToken','TTK',13);
};
