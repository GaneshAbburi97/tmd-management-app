import React from 'react';
import { Text } from 'react-native-paper';

const MeditationTimer: React.FC<{ minutes: number }> = ({ minutes }) => <Text>Meditation: {minutes} min</Text>;

export default MeditationTimer;
