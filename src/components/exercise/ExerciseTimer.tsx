import React from 'react';
import { Text } from 'react-native-paper';

const ExerciseTimer: React.FC<{ seconds: number }> = ({ seconds }) => <Text>Timer: {seconds}s</Text>;

export default ExerciseTimer;
