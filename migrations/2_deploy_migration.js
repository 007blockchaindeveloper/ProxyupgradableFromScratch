const Proxy = artifacts.require("Proxy");
const contract1 = artifacts.require("contract1");
const contract2 = artifacts.require("contract2");
const testContract = artifacts.require("testcontract");
module.exports = async function (deployer) {
    let proxy = await deployer.deploy(Proxy);
    let testcontract = await deployer.deploy(testContract);
    let con1 =await deployer.deploy(contract1);
    let con2 =await deployer.deploy(contract2);
    await proxy.attach(con1);
    await proxy.setImplementation(con1.address);
    let con1bytecode = await testcontract.getByteCode1();
    let con2bytecode = await testcontract.getByteCode2();
    let con1_address = await proxy.deploy(con1bytecode);
    let con2_address = await proxy.deploy(con2bytecode);
};
