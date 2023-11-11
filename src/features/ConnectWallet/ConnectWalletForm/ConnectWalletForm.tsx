import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  Button,
  Text,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import { MNEMONIC_LENGTH } from '@constants/index';
import useImportingWallet from '@hooks/useImportingWallet';

interface IWalletConnectForm {
  phrase: string;
}

const ConnectWalletForm = () => {
  const { fetchWalletData } = useImportingWallet();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IWalletConnectForm>({
    defaultValues: {
      phrase: '',
    },
  });

  const onSubmit = (data: IWalletConnectForm) => {
    fetchWalletData(data.phrase);
  };

  return (
    <VStack w="$3/4" space="lg">
      <Text>24 Words</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          validate: value => value.split(' ').length === MNEMONIC_LENGTH,
        }}
        disabled={isSubmitting}
        render={({ field: { onChange, value } }) => (
          <Textarea
            w="$full"
            h="$48"
            backgroundColor="$warmGray100"
            softShadow="2"
          >
            <TextareaInput
              value={value}
              role="none"
              placeholder="Add keyphrase"
              onChangeText={newVal => onChange(newVal)}
            />
          </Textarea>
        )}
        name="phrase"
      />
      {errors.phrase && (
        <Text h="$6" color="$red700">
          Please enter 24 words
        </Text>
      )}
      {!errors.phrase && <Box h="$6" />}
      <Button
        mt="$9"
        isDisabled={!!errors.phrase || isSubmitting}
        // @ts-ignore
        onPress={handleSubmit(onSubmit)}
      >
        <Text color="$white">Import Wallet</Text>
      </Button>
    </VStack>
  );
};

export default ConnectWalletForm;
