import React from 'react';
import twitterLogo from '../assets/twitter-logo.svg';
import openseaLogo from '../assets/opensea-logo.svg';


const TWITTER_HANDLE = 'kimnivore';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = 'https://testnets.opensea.io/collection/keanexkirby-boae5bk4kt';
// const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
// const OPENSEA_LINK = `http://testnets.opensea.io/assets/${CONTRACT_ADDRESS}`;

export default function Footer() {
    return (
        <div className="footer-container">
            <img alt="OpenSea Logo" className="opensea-logo" src={openseaLogo} />
            <a
                className="footer-text"
                href={OPENSEA_LINK}
                target="_blank"
                rel="noreferrer"
                >{`View on OpenSea`}</a>
            <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
            <a
                className="footer-text"
                href={TWITTER_LINK}
                target="_blank"
                rel="noreferrer"
                >{`Created by @${TWITTER_HANDLE}`}</a>
        </div>
    )
}