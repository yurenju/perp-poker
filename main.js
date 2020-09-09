//@ts-check
ethereum.request({ method: "eth_requestAccounts" });

const button = document.getElementById("poke");

button.addEventListener("click", async () => {
  const crpAddress = "0x91ACcD0BC2aAbAB1d1b297EB64C4774bC4e7bcCE";
  const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
  const abi = ["function pokeWeights() external"];
  const crp = new ethers.Contract(crpAddress, abi, signer);
  const tx = await crp.pokeWeights();
  await tx.wait();
});
