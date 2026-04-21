import React, { PropsWithChildren } from 'react';
import { Modal as PaperModal, Portal } from 'react-native-paper';

interface Props extends PropsWithChildren {
  visible: boolean;
  onDismiss: () => void;
}

const Modal: React.FC<Props> = ({ visible, onDismiss, children }) => (
  <Portal>
    <PaperModal visible={visible} onDismiss={onDismiss} contentContainerStyle={{ backgroundColor: 'white', margin: 16, padding: 16 }}>
      {children}
    </PaperModal>
  </Portal>
);

export default Modal;
