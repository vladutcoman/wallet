import React from 'react';
import { Button, Text } from '@gluestack-ui/themed';

type CustomButtonProps = {
  text: string;
  onPress: () => void;
  isDisabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  isDisabled,
  onPress,
}) => {
  return (
    <Button
      mt="$8"
      opacity={isDisabled ? 0.5 : 1}
      isDisabled={isDisabled}
      onPress={onPress}
    >
      <Text color="$white">{text}</Text>
    </Button>
  );
};

export default CustomButton;
