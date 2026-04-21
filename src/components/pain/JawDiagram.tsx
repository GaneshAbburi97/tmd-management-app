import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/config/colors';

const points = ['Left TMJ', 'Right TMJ', 'Masseter', 'Temporalis'];

interface Props {
  onSelect: (point: string) => void;
}

const JawDiagram: React.FC<Props> = ({ onSelect }) => (
  <View style={styles.wrap}>
    {points.map((point) => (
      <Pressable key={point} style={styles.point} onPress={() => onSelect(point)}>
        <Text style={styles.text}>{point}</Text>
      </Pressable>
    ))}
  </View>
);

const styles = StyleSheet.create({
  wrap: { gap: 8 },
  point: { backgroundColor: colors.background, borderColor: colors.primary, borderWidth: 1, borderRadius: 12, padding: 10 },
  text: { color: colors.text },
});

export default JawDiagram;
