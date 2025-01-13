require('@nomiclabs/hardhat-waffle');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    fuji: {
      url: "", // Paste the HTTPS url here
      accounts : [''] // This is the account Private Key, Details Described Below
    },
  },
};

// 0xb8488199D6B94dEFA8D6E9417d40840F27150670
