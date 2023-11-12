import FeatureWrapper from '@components/FeatureWrapper/FeatureWrapper';
import { Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const SendTransaction: React.FC = () => {
  const navigation = useNavigation();

  return (
    <FeatureWrapper title="Welcome">
      <VStack>
        <Text>Address</Text>
        <Text>
          erd1q9xj4uqrfy9ge6n7lefn24qfa78pqd9q5dlc2fj8yv79smtdf9qqcglc34
        </Text>
      </VStack>
    </FeatureWrapper>
  );
};

export default SendTransaction;
