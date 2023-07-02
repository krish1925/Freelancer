// in javascript we use async and await functions to stop the follow processes untill one process is completed.
// here we used the getContractfactory method to access our contract and then deployed it and then logged the address where the contract was deployed



const main = async() => {
  const contractFactory = await ethers.getContractFactory("Freelancer");
  const contract = await contractFactory.deploy();
  await contract.deployed;

  console.log("Contract deployed to: ", contract.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  }
  catch(error)
  {
    console.log(error);
    process.exit(1);
  }
}

runMain();