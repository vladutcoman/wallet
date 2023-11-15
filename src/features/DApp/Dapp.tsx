import React, { useEffect } from 'react';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { useGetAccount, useGetAccountInfo } from '@multiversx/sdk-dapp/hooks';

const Dapp = () => {
  const webviewRef = React.useRef<WebView>(null);

  // const getAcctount = useGetAccount();
  // const getAcctountInfo = useGetAccountInfo();

  // console.log({ getAcctount, getAcctountInfo });

  const handleOnMessage = (event: WebViewMessageEvent) => {
    console.log('======= START');
    console.log({ test: event.nativeEvent.data });
    setTimeout(() => {
      webviewRef.current?.postMessage('Hello from react native');
    }, 2000);

    console.log('======= END');
  };

  return (
    <WebView
      ref={webviewRef}
      source={{ uri: 'http://192.168.100.86:3000/' }}
      style={{ flex: 1 }}
      onMessage={handleOnMessage}
    />
  );
};

export default Dapp;
