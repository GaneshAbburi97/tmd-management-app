import React from 'react';
import ScreenTemplate from '@/components/common/ScreenTemplate';
import BreathingAnimation from '@/components/cbt/BreathingAnimation';
import { View } from 'react-native';

const BreathingExerciseScreen = () => (
  <View style={{ flex: 1 }}>
    <ScreenTemplate title="Breathing Exercise" subtitle="4-7-8 and box breathing guidance" />
    <View style={{ padding: 16 }}>
      <BreathingAnimation />
    </View>
  </View>
);

export default BreathingExerciseScreen;
