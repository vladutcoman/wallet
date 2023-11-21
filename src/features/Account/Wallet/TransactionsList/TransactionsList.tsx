import React, { Suspense, lazy } from 'react';
import { Spinner, Text, VStack } from '@gluestack-ui/themed';

import useTransactionsData from '@hooks/useTransactionsData/useTransactionsData';

const TransactionItem = lazy(
  () => import('./TransactionListItem/TransactionListItem'),
);

const TransactionsList: React.FC = () => {
  const { loading, error, transactions } = useTransactionsData();

  if (error) {
    return (
      <Text textAlign="center" color="$red400">
        Something went wrong. Could not Load the Transactions.
      </Text>
    );
  }

  return (
    !loading && (
      <Suspense fallback={<Spinner mt="$20" size="large" />}>
        <Text>Last 10 transaction for account:</Text>
        <VStack space="lg">
          {transactions.map((item, index) => (
            <TransactionItem
              key={index}
              receiver={item.receiver}
              sender={item.sender}
              amount={item.value}
            />
          ))}
        </VStack>
      </Suspense>
    )
  );
};

export default TransactionsList;
