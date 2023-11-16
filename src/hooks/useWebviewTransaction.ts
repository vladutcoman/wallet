import { useEffect, useRef, useState } from 'react';
import WebView, { WebViewMessageEvent } from 'react-native-webview';

import { UserSecretKey } from '@multiversx/sdk-wallet/out';
import { getSignature } from '@services/transactionService';
import { useWalletStore } from '@store/walletStore/walletStore';

/**
 * I think this hook could be split into two hooks
 * One for the modal, and one for the webview
 * I've let it like this for simplicity
 */
const useWebviewTransaction = () => {
  const [showModal, setShowModal] = useState(false);
  const webviewRef = useRef<WebView>(null);
  const { walletStore } = useWalletStore();
  const { address, nonce, secretKey } = walletStore;

  useEffect(() => {
    const token = getAuthToken();
    /**
     * Hack to send the token to webview after the webview loads
     * Probably not the best way to do it
     */
    const timeout = setTimeout(() => {
      webviewRef.current?.postMessage(token);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const getAuthToken = () => {
    try {
      /**
       * TODO Get auth token and send to webview
       */
    } catch (error) {
      console.log({ error });
    }
    return 'authToken';
  };

  const handleOnMessage = (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === 'ping') {
      setShowModal(true);
    }
  };

  const onCanceltransaction = () => {
    setShowModal(false);
  };

  const onConfirmTransaction = () => {
    setShowModal(false);
    sendSignatureToWebView();
  };

  const sendSignatureToWebView = async () => {
    const signature = await getSignature(
      nonce,
      address,
      0.001,
      secretKey as UserSecretKey,
    );
    webviewRef.current?.postMessage(signature);
  };

  return {
    webviewRef,
    handleOnMessage,
    showModal,
    onConfirmTransaction,
    onCanceltransaction,
  };
};

export default useWebviewTransaction;
