import { ITransactionData } from '@api/requests/types';

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS' as const;
export const SET_LOADING = 'SET_LOADING' as const;
export const SET_ERROR = 'SET_ERROR' as const;
export const SET_PARTIAL_DATA = 'SET_PARTIAL_DATA' as const;

interface SetTransactionsAction {
  type: typeof SET_TRANSACTIONS;
  payload: ITransactionData[];
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: boolean;
}

interface SetPartialDataAction {
  type: typeof SET_PARTIAL_DATA;
  payload: Partial<TransactionDataState>;
}

type TransactionsAction =
  | SetTransactionsAction
  | SetLoadingAction
  | SetErrorAction
  | SetPartialDataAction;

export type TransactionDataState = {
  transactions: ITransactionData[];
  loading: boolean;
  error: boolean;
};

export const transactionsReducer = (
  state: TransactionDataState,
  action: TransactionsAction,
): TransactionDataState => {
  switch (action.type) {
    case SET_PARTIAL_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
