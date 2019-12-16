import React from 'react';
import { createAppContainer } from 'react-navigation';
import navigationStack from './app/navigation/navigation.stack';

const AppContainer = createAppContainer(navigationStack);

export default function App() {
  return (
    <AppContainer />
  );
}
