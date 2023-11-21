import React from 'react';
import WebView from 'react-native-webview';

import useWebviewTransaction from '@hooks/useWebviewTransaction';
import { DAPP_URL } from '@constants/index';
import PingTransactionConfirmationModal from '../PingTransactionConfirmationModal/PingTransactionConfimationModal';

const DappWebviewWrapper = () => {
  const {
    webviewRef,
    handleOnMessage,
    showModal,
    onConfirmTransaction,
    onCanceltransaction,
  } = useWebviewTransaction();

  return (
    <>
      <WebView
        ref={webviewRef}
        source={{ uri: DAPP_URL }}
        onMessage={handleOnMessage}
      />
      <PingTransactionConfirmationModal
        showModal={showModal}
        onConfirm={onConfirmTransaction}
        onCancel={onCanceltransaction}
      />
    </>
  );
};

export default DappWebviewWrapper;
