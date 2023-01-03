const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT"); // recebe o contrato a ser compilado
    const nftContract = await nftContractFactory.deploy();  // faz o deploy do contrato
    await nftContract.deployed(); // cria mineradores para simular
    console.log("Contrato implantado em:", nftContract.address)
    // Chama a função.
    let txn = await nftContract.makeAnEpicNFT()  // chama função do contrato em nftContract
    // Espera ela ser minerada.
    await txn.wait()
    console.log("Cunhou NFT #1")
    txn = await nftContract.makeAnEpicNFT()   // chama função do contrato em nftContract
    // Espera ela ser minerada.
    await txn.wait()
    console.log("Cunhou NFT #2")
  }
  const runMain = async () => {
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
  runMain()