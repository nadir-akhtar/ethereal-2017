var DonorRegistry = artifacts.require("./DonorRegistry.sol");
var Frux = artifacts.require("./Frux.sol");
var Marketplace = artifacts.require("./Marketplace.sol");

module.exports = function(deployer) {
  deployer.deploy(DonorRegistry);
  deployer.deploy(Frux);
  deployer.link(Frux, Marketplace);
  deployer.deploy(Marketplace);
};
