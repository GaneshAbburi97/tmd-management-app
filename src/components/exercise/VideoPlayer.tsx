import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const VideoPlayer: React.FC<{ url: string }> = ({ url }) => <View><Text>Video URL: {url}</Text></View>;

export default VideoPlayer;
