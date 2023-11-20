# Wallet application

## Overall flow & description

This is a wallet application connected to the MultiverX testnet.
Features Implemented:
- Connect to account using the mnemonics
- See account data:
  - Address
  - Balance
  - Last 10 transactions
- Send transaction
- See sent transaction status
- Wrote 3 test suites
  - One utils simple method
  - One custom hook
  - One Component

## Tech details
- Used gluestack-ui for UI Library. For me, it was much easier and quicker to use it, but I can definitely work without it if needed
- Used axios for APIs requests. Here, I have made an ApiClient that wraps the axios lib and handles errors
- Used MobX for state management. Used it for speed up, I am comfortable with Redux too
- Used rn-nodeify to solve NodeJS libs not present in the client libs
- Used testing-library & Jest for testing
- Used react-native-webview for the webview feature
- Used react-form-hooks handling form management

## Improvements
- The first improvement I see is how I handle the wallet data (especially the secret key). There may be better ways to do it
- Write tests for all the components & functions
- Read the URLs and other environment-based constants from somewhere, don't hardcode them here
- Make the UI more prettier - maybe choose a better color scheme, do more styling, and use some effects & animations.
- Verify the application performance - for sure are places where we can use React.memo, useCallback, useMemo, and lazy loadings with suspense in the app
- Create an Error Boundary component (or more -> per feature maybe)


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
