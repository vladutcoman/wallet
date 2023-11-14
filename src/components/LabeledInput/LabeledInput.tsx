import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Input, InputField, Text, VStack } from '@gluestack-ui/themed';

type LabeledInputProps = {
  label: string;
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  isDisabled?: boolean;
};

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChange,
  isDisabled,
}) => {
  return (
    <VStack space="sm">
      <Text>{label}</Text>
      <Input isDisabled={isDisabled}>
        <InputField value={value} onChange={onChange} type="text" />
      </Input>
    </VStack>
  );
};

export default LabeledInput;
