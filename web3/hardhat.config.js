require('@nomiclabs/hardhat-waffle');
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    fuji: {
      url: "https://avax-fuji.g.alchemy.com/v2/IjBC2kcwQJQjvYcI6fOy_4eJlZbqFQpu", // Paste the HTTPS url here
      accounts : ['4a224b1e6191292afee457dc31de0381df485ed7cbd4bca20b8bd302df08e20e'] // This is the account Private Key, Details Described Below
    },
  },
};

// 0xb8488199D6B94dEFA8D6E9417d40840F27150670