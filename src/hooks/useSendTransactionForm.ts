import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useWalletStore } from '@store/walletStore/walletStore';
import { ISendTransactionForm } from '@features/SendTransaction/SendTransactionForm/SendTransactionForm';
import { startTransaction } from '@utils/utils';
import { UserSecretKey } from '@multiversx/sdk-wallet/out';

const useSendTransactionForm = () => {
  const navigation = useNavigation();
  const { walletStore } = useWalletStore();
  const { address, secretKey } = walletStore;

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

    // Send transaction
    startTransaction(address, to, Number(amount), secretKey as UserSecretKey);
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
