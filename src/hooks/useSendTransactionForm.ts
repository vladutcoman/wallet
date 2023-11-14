import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { UserSecretKey } from '@multiversx/sdk-wallet/out';

import { ISendTransactionForm } from '@features/SendTransaction/SendTransactionForm/SendTransactionForm';
import { brodcastTransaction } from '@services/transactionService';
import { useTransactionStore } from '@store/transactionStore/transactionStore';
import { useWalletStore } from '@store/walletStore/walletStore';

const useSendTransactionForm = () => {
  const [submitting, setSubmitting] = useState(false);
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
    setSubmitting(true);
    const { amount, to } = getValues();

    if (amount === '' || !Number.isFinite(Number(amount))) {
      setError('amount', {});
    }

    if (to === '') {
      setError('to', {});
    }

    if (errors.amount || errors.to) {
      setSubmitting(false);
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

    setSubmitting(false);

    if (txHash === '') {
      setError('amount', { message: 'Error while sending the transaction' });
      return;
    }

    setTransactionData(amount, txHash, to);
    // @ts-ignore
    navigation.navigate('TransactionConfirmation');
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
    submitting,
    onValueChange,
    handleOnSubmit,
  };
};

export default useSendTransactionForm;
