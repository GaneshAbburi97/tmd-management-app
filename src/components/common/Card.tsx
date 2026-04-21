import React, { PropsWithChildren } from 'react';
import { Card as PaperCard } from 'react-native-paper';

const Card: React.FC<PropsWithChildren> = ({ children }) => <PaperCard style={{ marginBottom: 12 }}><PaperCard.Content>{children}</PaperCard.Content></PaperCard>;

export default Card;
