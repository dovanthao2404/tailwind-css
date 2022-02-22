require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/zxcm1Ql88psBm7tj0iXI3ukRqXQ9q6ma',
      accounts: ['35f49815b62fbc5d2033255c70ae5d0a64dd71198e662457e737f1e4849b0544'],
    },
  },
};