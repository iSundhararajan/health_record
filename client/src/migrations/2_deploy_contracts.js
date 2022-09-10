const FileManager = artifacts.require("FileManager");

module.exports = async function(deployer) {
    deployer.deploy(FileManager);
};
