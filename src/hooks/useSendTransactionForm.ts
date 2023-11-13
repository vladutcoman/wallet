import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { UserSecretKey } from '@multiversx/sdk-wallet/out';
import { useWalletStore } from '@store/walletStore/walletStore';
import { ISendTransactionForm } from '@features/SendTransaction/SendTransactionForm/SendTransactionForm';
import { brodcastTransaction } from '@services/transactionService';
import { useTransactionStore } from '@store/transactionStore/transactionStore';

const useSendTransactionForm = () => {
  const navigation = useNavigation();
  const { walletStore } = useWalletStore();
  const { transactionStore } = useTransactionStore();

  const { address, secretKey } = walletStore;
  const { setTransactionData } = transactionStore;

  const {
    control,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<ISendTransactionForm>({
    defaultValues: {
      to: '',
      amount: '',
    },
  });

  const handleOnSubmit = () => {
    const { amount, to } = getValues();

    if (amount === '' || !Number.isFinite(Number(amount))) {
      setError('amount', {});
    }

    if (to === '') {
      setError('to', {});
    }

    if (errors.amount || errors.to) {
      return;
    }

    submitTransaction(to, Number(amount));
  };

  const submitTransaction = async (to: string, amount: number) => {
    const txHash = await brodcastTransaction(
      address,
      to,
      Number(amount),
      secretKey as UserSecretKey,
    );

    if (txHash === '') {
      setError('amount', { message: 'Error while sending the transaction' });
      return;
    }

    setTransactionData(amount, txHash, to);
    // @ts-ignore
    navigation.navigate('TransactionConfimarion');
  };

  const onValueChange = (
    newVal: string,
    onChange: (...event: any[]) => void,
    isAmount = false,
  ) => {
    isAmount ? clearErrors('amount') : clearErrors('to');
    onChange(newVal);
  };

  return {
    errors,
    control,
    onValueChange,
    handleOnSubmit,
  };
};

export default useSendTransactionForm;
