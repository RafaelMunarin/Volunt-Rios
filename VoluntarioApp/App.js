import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes'; // Ajuste o caminho conforme necessário

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
