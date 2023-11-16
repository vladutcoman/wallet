import React from 'react';
import {
  Button,
  ButtonText,
  Heading,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@gluestack-ui/themed';

type ConfirmationModalProps = {
  showModal: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const PingTransactionConfirmationModal: React.FC<ConfirmationModalProps> = ({
  showModal,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal isOpen={showModal} onClose={onCancel}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Confirm the ping transaction?</Heading>
        </ModalHeader>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={onCancel}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            action="positive"
            borderWidth="$0"
            onPress={onConfirm}
          >
            <ButtonText>Confirm</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PingTransactionConfirmationModal;
