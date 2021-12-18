Example of NEAR Gift Voucher integration
==================================

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Danail-Irinkov/near-gift-voucer)

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

This example demonstrates how to integrate your application with NEAR Wallet.
And send a gift voucher link to somebody.

## Getting started

To run this project you will need:
1. Install near-cli
2. Install dependencies 
3. Have a NEAR account (live or testnet) and set it up in src/config.js
4. Deploy our contract to the account using "yarn deploy" 
5. Run frontend - yarn dev
6. Open tab with https://localhost:1234
7. Login with your wallet and grant access to the dApp
8. Create a Voucher link
9. Send it to a friend to Claim it

### Standard deploy option
In this flow the smart contract (assembly/index.ts) will get deployed to a specific account created with the NEAR Wallet.

1. Ensure `near-cli` is installed by running:

```
near --version
```

If needed, install `near-cli`:

```
npm install near-cli -g
```

2. If you do not have a NEAR account, please create one with [NEAR Wallet](wallet.testnet.near.org).

In the project root, login with `near-cli` by following the instructions after this command:

```
near login
```

3. Modify the top of `src/config.js`, changing the `CONTRACT_NAME` to be the NEAR account that was just used to log in.

```javascript
…
const CONTRACT_NAME = process.env.CONTRACT_NAME || 'YOUR_ACCOUNT_NAME_HERE'; /* TODO: fill this in! */
…
```

4. Install dependencies:

```
yarn --frozen-lockfile
```

5. Start the example!

```
yarn start
```

6. Build and deploy this smart contract to a development account. This development account will be created automatically and is not intended for reuse:

```
yarn dev
```

Your command line which will display a link to localhost similar to:
```bash
Server running at http://localhost:1234
```

Please open that link your browser to continue and see how to log in with NEAR Wallet in a simple webapp.

## To Test

```
yarn asp // as-pect tests
yarn jest // integration tests
yarn test // both
```

## To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract


## Data collection
By using Gitpod in this project, you agree to opt-in to basic, anonymous analytics. No personal information is transmitted. Instead, these usage statistics aid in discovering potential bugs and user flow information.
