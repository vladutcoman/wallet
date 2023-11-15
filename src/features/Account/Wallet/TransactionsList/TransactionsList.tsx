import React from 'react';
import { Spinner, Text, VStack } from '@gluestack-ui/themed';

import useTransactionsData from '@hooks/useTransactionsData/useTransactionsData';
import TransactionListItem from './TransactionListItem/TransactionListItem';

const TransactionsList: React.FC = () => {
  const { loading, error, transactions } = useTransactionsData();

  if (loading) {
    return <Spinner mt="$20" size="large" />;
  }

  if (error) {
    return (
      <Text textAlign="center" color="$red400">
        Something went wrong. Could not Load the Transactions.
      </Text>
    );
  }

  return (
    <>
      <Text>Last 10 transaction for account:</Text>
      <VStack space="lg">
        {transactions.map((item, index) => (
          <TransactionListItem
            key={index}
            receiver={item.receiver}
            sender={item.sender}
            amount={item.value}
          />
        ))}
      </VStack>
    </>
  );
};

export default TransactionsList;
