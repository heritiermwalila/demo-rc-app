import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import RootApp from './src/navigation/root';

export default function App() {
  return (
    <PaperProvider>
      <RootApp />
    </PaperProvider>
  );
}
