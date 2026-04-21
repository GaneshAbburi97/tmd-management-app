import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

interface Props {
  label: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ label, onPress }) => <PaperButton mode="contained" onPress={onPress}>{label}</PaperButton>;

export default Button;
