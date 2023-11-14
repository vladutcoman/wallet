import { useCallback, useEffect, useState } from 'react';

import { getTransactionWatcher } from '@services/networkProvidersService';
import { useTransactionStore } from '@store/transactionStore/transactionStore';

export enum ConfirmationStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
}

const useTransactionWatcher = () => {
  const [status, setStatus] = useState(ConfirmationStatus.PENDING);
  const { transactionStore } = useTransactionStore();
  const { transactionHash } = transactionStore;

  const watchTransaction = useCallback(async () => {
    const watcher = getTransactionWatcher();
    try {
      await watcher.awaitCompleted({
        getHash: () => {
          return { hex: () => transactionHash };
        },
      });
      setStatus(ConfirmationStatus.CONFIRMED);
    } catch (error) {
      setStatus(ConfirmationStatus.FAILED);
    }
  }, [transactionHash]);

  useEffect(() => {
    watchTransaction();
  }, [watchTransaction]);

  return { status };
};

export default useTransactionWatcher;
