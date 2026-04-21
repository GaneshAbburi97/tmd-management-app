import React from 'react';
import { List } from 'react-native-paper';
import { Exercise } from '@/types';

const ExerciseCard: React.FC<{ item: Exercise }> = ({ item }) => <List.Item title={item.title} description={`${item.difficulty} • ${item.durationSeconds}s`} />;

export default ExerciseCard;
