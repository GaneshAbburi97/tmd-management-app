import React from 'react';
import { FlatList } from 'react-native';
import ScreenTemplate from '@/components/common/ScreenTemplate';
import ExerciseCard from '@/components/exercise/ExerciseCard';
import { Exercise } from '@/types';

const exercises: Exercise[] = Array.from({ length: 50 }).map((_, index) => ({
  id: String(index + 1),
  title: `TMD Exercise ${index + 1}`,
  description: 'Guided jaw mobility and relaxation routine',
  videoUrl: 'https://example.com/video',
  durationSeconds: 60 + index,
  difficulty: index % 3 === 0 ? 'beginner' : index % 3 === 1 ? 'intermediate' : 'advanced',
  instructions: ['Sit upright', 'Relax jaw', 'Repeat movement slowly'],
}));

const ExerciseLibraryScreen = () => (
  <FlatList
    ListHeaderComponent={<ScreenTemplate title="Exercise Library" subtitle="50+ TMD-specific exercises" />}
    data={exercises}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <ExerciseCard item={item} />}
  />
);

export default ExerciseLibraryScreen;
