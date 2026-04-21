import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';
import { PainRecord } from '@/types';

const PainHistoryList: React.FC<{ data: PainRecord[] }> = ({ data }) => (
  <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => <List.Item title={`Intensity ${item.intensity}`} description={new Date(item.createdAt).toLocaleString()} />} />
);

export default PainHistoryList;
