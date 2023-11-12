import React, { PropsWithChildren } from 'react';
import { Platform } from 'react-native';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';

type FeatureWrapperProps = {
  title: React.ReactNode;
} & PropsWithChildren<{}>;

const FeatureWrapper: React.FC<FeatureWrapperProps> = ({ children, title }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
    >
      <ScrollView w="$full">
        <VStack
          py="$10"
          w="$5/6"
          space="2xl"
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
        >
          <Text fontSize="$2xl" fontWeight="$bold">
            {title}
          </Text>
          {children}
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FeatureWrapper;
