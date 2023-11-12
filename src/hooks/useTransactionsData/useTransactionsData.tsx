import { useReducer } from 'react';
import { useWalletStore } from '@store/walletStore/walletStore';
import { useCallback, useEffect } from 'react';
import { fetchTransactionData } from '@api/index';
import { SET_PARTIAL_DATA, transactionsReducer } from './reducer';

const initialState = {
  transactions: [],
  loading: false,
  error: false,
};

const useTransactionsData = () => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);
  const { walletStore } = useWalletStore();

  const fetchData = useCallback(async () => {
    dispatch({
      type: SET_PARTIAL_DATA,
      payload: {
        error: false,
        loading: true,
      },
    });

    const transactionsResponse = await fetchTransactionData(
      walletStore.address,
    );

    if (transactionsResponse.error) {
      dispatch({
        type: SET_PARTIAL_DATA,
        payload: {
          error: true,
          loading: false,
        },
      });
    } else {
      const last10Transactions = transactionsResponse.data
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 10);
      dispatch({
        type: SET_PARTIAL_DATA,
        payload: {
          transactions: last10Transactions,
          loading: false,
        },
      });
    }
  }, [walletStore.address]);

  useEffect(() => {
    fetchData();
  }, [fetchData, walletStore.address]);

  return {
    transactions: state.transactions,
    loading: state.loading,
    error: state.error,
  };
};

export default useTransactionsData;
