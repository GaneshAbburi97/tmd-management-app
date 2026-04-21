import React from 'react';
import { List } from 'react-native-paper';

const CopingStrategyCard: React.FC<{ title: string; detail: string }> = ({ title, detail }) => <List.Item title={title} description={detail} />;

export default CopingStrategyCard;
