require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth noise minor grace opinion suspect gesture'; 
let testAccounts = [
"0x8ebd88394e589b04ca254f924dbaef86c8f60f6c7bdd66f28d492328fc12c96f",
"0x23ca60fcce2909d14b164a7df8b64a5910da32390cf99c74585cae3b0399ad26",
"0xce320b40a734360398e9ef89a676e1d882fcb54a19ecc762f6364375e60c50e1",
"0xbcaa06f0de23dcfc28a71fb550105f74077681dc21374a8b3a9fecbcbfcc5484",
"0x2a213e31f5621a5ab664062db24b6d27772a8618f8011ac997519e92e27c9230",
"0x4e2aac0ff58bf340b05cef8fbc97d6526f5c0d0033fc077085a7d0553ef4be3a",
"0xae49e35a713cac54ce24c1b11afe43c29afc0345cdc51513fd0d460128342a77",
"0xc2178877020ba258db771179f8e1ab68fbb059b3d3080c507967adc77cf36266",
"0xb34e5341e98fc687d2b2063fbab2b4cc78a00c2ed04fadec89bc58967051b2a7",
"0xa8d0a04586430a8eb82da239303ade2bcffa64c5f6f62c4820e02678b5fc48da"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

