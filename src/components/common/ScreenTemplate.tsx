import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { spacing } from '@/config/spacing';

interface Props {
  title: string;
  subtitle?: string;
}

const ScreenTemplate: React.FC<Props> = ({ title, subtitle }) => (
  <View style={styles.container}>
    <Text variant="headlineMedium">{title}</Text>
    {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.md },
  subtitle: { marginTop: spacing.sm },
});

export default ScreenTemplate;
