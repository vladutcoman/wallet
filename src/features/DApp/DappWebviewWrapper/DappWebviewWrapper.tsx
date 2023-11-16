import { DAPP_URL } from '@constants/index';
import React from 'react';
import WebView, { WebViewMessageEvent } from 'react-native-webview';

const DappWebviewWrapper = () => {
  const webviewRef = React.useRef<WebView>(null);

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
      source={{ uri: DAPP_URL }}
      onMessage={handleOnMessage}
    />
  );
};

export default DappWebviewWrapper;
