import React from 'react';
import { shallow } from 'enzyme';
import AboutCoin from './AboutCoin';

const data = {
  id: 'bitcoin',
  name: 'Bitcoin',
  price: '7231.3856839244778371',
  supply: '18098137.0000000000000000',
  maxSupply: '21000000.0000000000000000',
  marketCapUsd: '130874608807.5038975492994827',
  volumeUsd24Hr: '3535338669.2445264736224412',
  changePercent24Hr: '0.5591885701135556',
  logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
  website: 'https://bitcoin.org/',
  description: 'Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym "Satoshi Nakamoto" published the Bitcoin Whitepaper and described it as: "a purely peer-to-peer version of electronic cash, which would allow online payments to be sent directly from one party to a...'
};

describe('AboutCoin component', () => {
  it('renders AboutCoin', () => {
    const wrapper = shallow(<AboutCoin { ...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
