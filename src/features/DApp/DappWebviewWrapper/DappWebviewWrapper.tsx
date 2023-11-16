import { DAPP_URL } from '@constants/index';
import { useWalletStore } from '@store/walletStore/walletStore';
import React, { useEffect, useRef, useState } from 'react';
import WebView, { WebViewMessageEvent } from 'react-native-webview';

const DappWebviewWrapper = () => {
  const [signature, setSignature] = useState('');
  const webviewRef = useRef<WebView>(null);
  const { walletStore } = useWalletStore();

  const { secretKey, address } = walletStore;
  console.log({ secretKey, address });

  useEffect(() => {
    getAuthToken();
  }, []);

  useEffect(() => {
    if (signature) {
      webviewRef.current?.postMessage(signature);
    }
  }, [signature]);

  const getAuthToken = () => {
    try {
      /**
       * Get token and send to webview
       * webviewRef.current?.postMessage(authToken);
       */
    } catch (error) {
      console.log({ error });
    }
  };

  const handleOnMessage = (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === 'ping') {
      /**
       * Open modal
       * - if accept: get signature and send to webview
       * - if decline: send empty string/do nothing
       */
    }
  };

  return (
    <WebView
      ref={webviewRef}
      source={{ uri: DAPP_URL }}
      onMessage={handleOnMessage}
    />
  );
};

export default DappWebviewWrapper;
