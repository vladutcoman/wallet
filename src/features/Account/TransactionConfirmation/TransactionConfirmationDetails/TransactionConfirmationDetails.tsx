import React from 'react';
import { Text, VStack } from '@gluestack-ui/themed';

import { useTransactionStore } from '@store/transactionStore/transactionStore';
import RowDataView from '@components/RowDataView/RowDataView';

const TransactionConfirmationDetails = () => {
  const { transactionStore } = useTransactionStore();
  const { amount, receiverAddress, transactionHash } = transactionStore;

  return (
    <VStack space="md">
      <VStack alignItems="center">
        <Text color="$black" fontSize="$lg" fontWeight="$bold">
          {`${amount} EeGLD`}
        </Text>
        <RowDataView label="Receiver address" value={receiverAddress} />
      </VStack>
      <RowDataView label="TX Hash" value={transactionHash} />
    </VStack>
  );
};

export default TransactionConfirmationDetails;
