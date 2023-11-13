import {
  CheckCircleIcon,
  CloseCircleIcon,
  Icon,
  Spinner,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import { getTransactionWatcher } from '@services/networkProvidersService';
import { useTransactionStore } from '@store/transactionStore/transactionStore';
import React, { useEffect, useState, useCallback } from 'react';

enum ConfirmationStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
}

const TransactionConfirmationStatus = () => {
  const [status, setStatus] = useState(ConfirmationStatus.PENDING);
  const { transactionStore } = useTransactionStore();
  const { transactionHash } = transactionStore;

  const watchTransaction = useCallback(async () => {
    const watcher = getTransactionWatcher();
    const transactionOnNetwork = await watcher.awaitCompleted({
      getHash: () => {
        return { hex: () => transactionHash };
      },
    });
    console.log({ transactionOnNetwork });
    // setStatus(status);
    setStatus(ConfirmationStatus.CONFIRMED);
  }, [transactionHash]);

  useEffect(() => {
    watchTransaction();
  }, [watchTransaction]);

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
