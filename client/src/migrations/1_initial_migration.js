const Migrations = artifacts.require("Migrations");

module.exports = async function(deployer) {
    deployer.deploy(Migrations);
};
