import RowDataView from '@components/RowDataView/RowDataView';
import { Text, VStack } from '@gluestack-ui/themed';
import { useTransactionStore } from '@store/transactionStore/transactionStore';
import React from 'react';

const TransactionConfirmationDetails = () => {
  const { transactionStore } = useTransactionStore();
  const { amount, receiverAddress, transactionHash } = transactionStore;

  return (
    <VStack space="md">
      <VStack alignItems="center">
        <Text color="$black" fontSize="$lg" fontWeight="$bold">
          {`${amount} EeGLD`}
        </Text>
        <RowDataView label="succesfully send to" value={receiverAddress} />
      </VStack>
      <RowDataView label="TX Hash" value={transactionHash} />
    </VStack>
  );
};

export default TransactionConfirmationDetails;
