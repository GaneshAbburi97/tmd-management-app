import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { colors } from '@/config/colors';

const PainTrendChart: React.FC<{ values: number[] }> = ({ values }) => (
  <LineChart
    data={{ labels: values.map((_, idx) => `${idx + 1}`), datasets: [{ data: values.length ? values : [0] }] }}
    width={Dimensions.get('window').width - 32}
    height={220}
    yAxisSuffix=""
    chartConfig={{
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      color: () => colors.primary,
      labelColor: () => '#666',
    }}
    bezier
  />
);

export default PainTrendChart;
