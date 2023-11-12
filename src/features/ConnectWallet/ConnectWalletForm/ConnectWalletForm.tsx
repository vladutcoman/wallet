import React from 'react';
import { Controller } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import useConnectWalletForm from '@hooks/useConnectWalletForm';
import {
  Box,
  Text,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import { MNEMONIC_LENGTH } from '@constants/index';
import CustomButton from '@components/CustomButton/CustomButton';

export interface IWalletConnectForm {
  phrase: string;
}

const ConnectWalletForm = () => {
  const { errors, control, isSubmitting, handleOnSubmit } =
    useConnectWalletForm();

  return (
    <VStack w="$full" space="lg">
      <Text>24 Words</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          validate: value => value.split(' ').length === MNEMONIC_LENGTH,
        }}
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
          {errors.phrase.message || 'Please insert the 24 words phrase'}
        </Text>
      )}
      {!errors.phrase && <Box h="$6" />}
      <CustomButton
        text="Create New Wallet"
        isDisabled={isSubmitting || !!errors.phrase}
        onPress={handleOnSubmit}
      />
    </VStack>
  );
};

export default observer(ConnectWalletForm);
