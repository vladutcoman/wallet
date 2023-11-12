import { Input, InputField, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type LabeledInputProps = {
  label: string;
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <VStack space="sm">
      <Text>{label}</Text>
      <Input>
        <InputField value={value} onChange={onChange} type="text" />
      </Input>
    </VStack>
  );
};

export default LabeledInput;
