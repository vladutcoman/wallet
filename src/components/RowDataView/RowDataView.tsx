import { Text, VStack } from '@gluestack-ui/themed';
import React from 'react';

type RowDataViewProps = {
  label: string;
  value: string;
  labelBold?: boolean;
};

const RowDataView: React.FC<RowDataViewProps> = ({
  label,
  value,
  labelBold,
}) => {
  return (
    <VStack justifyContent="center" alignItems="center" space="sm">
      <Text textAlign="center" fontWeight={labelBold ? '$bold' : '$normal'}>
        {label}
      </Text>
      <Text color="$black" textAlign="center">
        {value}
      </Text>
    </VStack>
  );
};

export default RowDataView;
