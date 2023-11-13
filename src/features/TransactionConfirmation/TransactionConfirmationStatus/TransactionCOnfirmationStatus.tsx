import {
  CheckCircleIcon,
  CloseCircleIcon,
  Icon,
  Spinner,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import useTransactionWatcher, {
  ConfirmationStatus,
} from '@hooks/useTransactionWatcher';

import React from 'react';

const TransactionConfirmationStatus = () => {
  const { status } = useTransactionWatcher();

  if (status === ConfirmationStatus.PENDING) {
    return (
      <VStack space="md" h="$32">
        <Text color="$black" fontSize="$lg" fontWeight="$bold">
          Pending...
        </Text>

        <Spinner h="$20" w="$20" size="large" />
      </VStack>
    );
  }

  if (status === ConfirmationStatus.FAILED) {
    return (
      <VStack space="md" h="$32">
        <Text color="$black" fontSize="$lg" fontWeight="$bold">
          Something went wrong
        </Text>
        <Icon
          alignSelf="center"
          as={CloseCircleIcon}
          m="$2"
          w="$24"
          h="$24"
          color="$red500"
        />
      </VStack>
    );
  }

  return (
    <View h="$32">
      <Icon as={CheckCircleIcon} m="$2" w="$24" h="$24" color="$green500" />
    </View>
  );
};

export default TransactionConfirmationStatus;
