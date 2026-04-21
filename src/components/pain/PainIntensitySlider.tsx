import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

interface Props {
  value: number;
}

const PainIntensitySlider: React.FC<Props> = ({ value }) => (
  <View>
    <Text>Pain Intensity: {value}/10</Text>
  </View>
);

export default PainIntensitySlider;
