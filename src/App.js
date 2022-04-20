import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';
import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import KeanesNFT from  './utils/KeanseNFT.json'
import Heart from './components/Heart';

// Constants
const TWITTER_HANDLE = 'kimnivore';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = 'https://testnets.opensea.io/collection/keanexkirby-boae5bk4kt';
const TOTAL_MINT_COUNT = 100;

const CONTRACT_ADDRESS = '0x2ea8f9eacD5eF9211Abd58E54E483774F845BdDE';

const App = () => {

  const [currentAccount, setCurrentAccount] = useState('');
  const [nftCount, setNftCount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const getNftCount = async () => {
    const { ethereum } = window;
    if(ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, KeanesNFT.abi, signer);

      const no = await connectedContract.getTotalNFTsMintedSoFar();
      setNftCount(no.toString());
    }
  }

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if(!ethereum) {
      console.log('Make sure you have metamask');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if(accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
      setupEventListener()
    } else {
      console.log('No authorized account found');
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
      setupEventListener()
    } catch(error) {
      console.log(error);
    }
    }

  const setupEventListener = async () => {
    try {
      const { ethereum } = window;
      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, KeanesNFT.abi, signer);
        connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber())
          alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take up to 10 min to show up on OpenSea. Here's the link: http://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
        });
        console.log('Setup event listener')
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window;
      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, KeanesNFT.abi, signer);

        console.log('Going to pop wallet now to pay gas...');
        let nftTxn = await connectedContract.makeAnEpicNFT();
        setIsLoading(true)
        console.log('Mining...please wait.');
        await nftTxn.wait();
        setIsLoading(false)
        console.log(nftTxn);
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])   

  useEffect(() => {
    getNftCount();
  })

  // Render Methods
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  const renderMintUI = () => (
    <button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
      Mint NFT
    </button>
  )

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">Keane x Kirby Collection</p>
          <p className="sub-text">
            Collect a rare Kirby-word NFT
          </p>
          { currentAccount === "" ? renderNotConnectedContainer() : renderMintUI() }
        </div>
        <div className="header gradient-text">{nftCount} / {TOTAL_MINT_COUNT} Minted</div>

        <Heart isLoading={isLoading} />
        <div className="footer-container">
        <a
            className="footer-text"
            href={OPENSEA_LINK}
            target="_blank"
            rel="noreferrer"
            > 🌊 View on OpenSea </a>
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Created by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
