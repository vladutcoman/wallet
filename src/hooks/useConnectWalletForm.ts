import { useForm } from 'react-hook-form';
import { IWalletConnectForm } from '@features/ConnectWallet/ConnectWalletForm/ConnectWalletForm';
import { useWalletStore } from '@store/walletStore/walletStore';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { getAddressFromMnemonic } from '@utils/utils';
import getWalletData from '@api/requests/fetchWalletData';
import { UserSecretKey } from '@multiversx/sdk-wallet/out';

const useConnectWalletForm = () => {
  const navigation = useNavigation();
  const [submitting, setSubmitting] = useState(false);
  const { walletStore } = useWalletStore();
  const {
    control,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<IWalletConnectForm>({
    defaultValues: {
      phrase: '',
    },
  });

  const fetchWalletData = useCallback(
    async (mnemonic: string) => {
      const { address, secretKey } = getAddressFromMnemonic(mnemonic);
      if (address === '') {
        setError('phrase', { message: 'Invalid phrase' });
        setSubmitting(false);
        return;
      }

      const walletDataResponse = await getWalletData(address);
      if (!walletDataResponse.error) {
        walletStore.setWalletData(
          walletDataResponse.data.address,
          walletDataResponse.data.balance,
          secretKey as UserSecretKey,
        );
        setSubmitting(false);
        // @ts-ignore
        navigation.navigate('Wallet');
      } else {
        setError('phrase', { message: 'Error while getting Wallet Data' });
        setSubmitting(false);
      }
    },
    [walletStore, navigation, setError],
  );

  useEffect(() => {
    if (submitting) {
      fetchWalletData(getValues('phrase'));
    }
  }, [submitting, getValues, fetchWalletData]);

  const handleOnSubmit = () => {
    setSubmitting(true);
  };

  const onValueChange = (
    newVal: string,
    onChange: (...event: any[]) => void,
  ) => {
    clearErrors('phrase');
    onChange(newVal);
  };

  return {
    errors,
    control,
    onValueChange,
    isSubmitting: submitting,
    handleOnSubmit,
  };
};

export default useConnectWalletForm;
