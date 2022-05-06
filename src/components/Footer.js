import React from 'react';
import twitterLogo from '../assets/twitter-logo.svg';
import openseaLogo from '../assets/opensea-logo.svg';

const TWITTER_HANDLE = 'kimnivore';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = 'https://testnets.opensea.io/collection/keanexkirby-l4xqeywrrt';


export default function Footer() {
    return (
        <>
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
            {/* <div className='bottom-banner'></div> */}
        </>
    )
}