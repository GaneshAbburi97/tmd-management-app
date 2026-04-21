import React from 'react';
import { Appbar } from 'react-native-paper';

const Header: React.FC<{ title: string }> = ({ title }) => <Appbar.Header><Appbar.Content title={title} /></Appbar.Header>;

export default Header;
