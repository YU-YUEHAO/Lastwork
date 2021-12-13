const hello = artifacts.require("EthVoting");

module.exports = function (deployer) {
  deployer.deploy(hello);
};
