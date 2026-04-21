import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ScreenTemplate from '@/components/common/ScreenTemplate';
import JawDiagram from '@/components/pain/JawDiagram';
import PainIntensitySlider from '@/components/pain/PainIntensitySlider';

const PainMapScreen = () => {
  const [selected, setSelected] = useState('None');
  const [intensity] = useState(5);

  return (
    <View style={{ flex: 1 }}>
      <ScreenTemplate title="Pain Map" subtitle="Track locations and severity" />
      <View style={{ padding: 16, gap: 12 }}>
        <Text>Selected point: {selected}</Text>
        <JawDiagram onSelect={setSelected} />
        <PainIntensitySlider value={intensity} />
      </View>
    </View>
  );
};

export default PainMapScreen;
