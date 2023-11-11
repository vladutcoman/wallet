import React from 'react';
import { Text, Textarea, TextareaInput, VStack } from '@gluestack-ui/themed';

const ConnectWalletInputArea = () => {
  return (
    <VStack w="$3/4" space="lg">
      <Text aria-label="keyphrase">24 Words</Text>
      <Textarea id="keyphrase" w="$full" h="$48">
        <TextareaInput placeholder="Add keyphrase" />
      </Textarea>
    </VStack>
  );
};

export default ConnectWalletInputArea;
