import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import ScreenTemplate from '@/components/common/ScreenTemplate';
import PainTrendChart from '@/components/charts/PainTrendChart';

const DashboardScreen = () => (
  <ScrollView>
    <ScreenTemplate title="Home Dashboard" subtitle="Daily overview and reminders" />
    <Text style={{ paddingHorizontal: 16, marginBottom: 8 }}>Weekly pain trend</Text>
    <PainTrendChart values={[5, 6, 4, 4, 3, 5, 2]} />
  </ScrollView>
);

export default DashboardScreen;
