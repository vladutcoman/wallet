import useSendTransactionForm from '@hooks/useSendTransactionForm';
import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, VStack } from '@gluestack-ui/themed';
import CustomButton from '@components/CustomButton/CustomButton';
import LabeledInput from '@components/LabeledInput/LabeledInput';

export interface ISendTransactionForm {
  to: string;
  amount: string;
}

const SendTransactionForm: React.FC = () => {
  const { errors, control, handleOnSubmit, onValueChange } =
    useSendTransactionForm();

  return (
    <VStack w="$full" space="lg">
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <LabeledInput
            label="To"
            value={value}
            onChange={newVal =>
              onValueChange(newVal.nativeEvent.text, onChange)
            }
          />
        )}
        name="to"
      />
      {errors.to && (
        <Text h="$6" color="$red700">
          Please insert a valid address
        </Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <LabeledInput
            label="Amount"
            value={value}
            onChange={newVal =>
              onValueChange(newVal.nativeEvent.text, onChange, true)
            }
          />
        )}
        name="amount"
      />
      {errors.amount && (
        <Text h="$6" color="$red700">
          Please insert a valid amount
        </Text>
      )}
      <CustomButton
        isDisabled={!!errors.to || !!errors.amount}
        text="Send Transaction"
        onPress={handleOnSubmit}
      />
    </VStack>
  );
};

export default SendTransactionForm;
