require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin nature sugar spray'; 
let testAccounts = [
"0x3b2f6cb75d9b121f463eecc12b47895e0d555efa0ad45b077adac71ca1731ccb",
"0x5a1a144ca4fcced8a6c6cd606c365fb8a59e51edbabdca132bed7dfb8c40a5fa",
"0x97ef9ffbf605612902d79e3a906cbffb9ba62d15aebdb7f599e5001769796ac1",
"0x213080f8ffedcc1550ee369f06c863cb04faf69495317cf69579533c9f5b004d",
"0x9e35a8fe14bc8261d61b8ea7d64b2fe0215c3b9182b13d07c68a5ffe9cab7739",
"0x16e39f512446aede18588e183a9e8cf7b91c9f61f29bc68a1357a5876b7877e8",
"0xd781b138732b8b15abda39da45e5a2484c03dd87a511d5730178f52c7ca5558e",
"0xb06f2c446ef2e5c3957b76242698e7347c333c00aa856f410059f74239a9cb55",
"0x2ba821ee0dea2b04901705021a19547eb4c053a12b5a9b26cf22b5656518acdb",
"0x6378d1112dcf317f32e974ecaf9411f4ae1313c7f42eb3711946ab7bb9f41250"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

