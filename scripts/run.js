const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT"); // recebe o contrato a ser compilado
    const nftContract = await nftContractFactory.deploy(); // faz o deploy do contrato
    await nftContract.deployed();  // cria mineradores para simular
    console.log("Contrato implantado em:", nftContract.address);  // retorna o endereço do contrato
    // Chama a função.
    let txn = await nftContract.makeAnEpicNFT();
    // Espera ela ser minerada.
    await txn.wait();
    // Minta outro NFT por diversão.
    txn = await nftContract.makeAnEpicNFT();
    // Espera ele ser minerada.
  await txn.wait();
  };
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  runMain();