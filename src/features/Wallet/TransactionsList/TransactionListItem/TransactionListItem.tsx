import RowDataView from '@components/RowDataView/RowDataView';
import { Divider, VStack } from '@gluestack-ui/themed';
import React from 'react';

type TransactionListItemProps = {
  amount: string;
  sender: string;
  receiver: string;
};

const TransactionListItem: React.FC<TransactionListItemProps> = ({
  amount,
  sender,
  receiver,
}) => {
  return (
    <VStack p="$4" borderWidth="$1" rounded="$lg" borderColor="$blue400">
      <RowDataView labelBold label="Amount" value={amount} />
      <Divider my="$1" />
      <RowDataView labelBold label="Sender" value={sender} />
      <Divider my="$1" />
      <RowDataView labelBold label="Receiver" value={receiver} />
    </VStack>
  );
};

export default TransactionListItem;
