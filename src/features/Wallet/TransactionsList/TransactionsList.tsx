import React from 'react';
import { Text, VStack } from '@gluestack-ui/themed';

import TransactionListItem from './TransactionListItem/TransactionListItem';

const TransactionsList: React.FC = () => {
  const list = [
    {
      amount: '2.3',
      sender: 'erd1q9xj4uqrfy9ge6n7lefn24qfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34',
      receiver:
        'erd1q9xj4uqrfy9ge6n7lefn2ddfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34',
    },
    {
      amount: '22.3',
      sender: 'erd1q9xj4uqrfy9ge6n7lefn24qfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34',
      receiver:
        'erd1q9xj4uqrfy9ge6n7lefn2ddfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34',
    },
    {
      amount: '2.3',
      sender: 'erd1q9xj4uqrfy9ge6n7lefn24qfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34',
      receiver:
        'erd1q9xj4uqrfy9ge6n7lefn2ddfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34',
    },
    {
      amount: '22.3',
      sender: 'erd1q9xj4uqrfy9ge6n7lefn24qfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34',
      receiver:
        'erd1q9xj4uqrfy9ge6n7lefn2ddfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34',
    },
  ];

  return (
    <>
      <Text>TransactionsList</Text>
      <VStack space="lg">
        {list.map((item, index) => (
          <TransactionListItem key={index} {...item} />
        ))}
      </VStack>
    </>
  );
};

export default TransactionsList;
