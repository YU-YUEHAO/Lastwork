const hello = artifacts.require("EthVoting_ygh");

module.exports = function (deployer) {
  deployer.deploy(hello);
};
