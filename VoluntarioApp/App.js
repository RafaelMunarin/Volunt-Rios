// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import Routes from './src/routes'; // Ajuste o caminho conforme necessário

// export default function App() {
//   return (
//     <>
//       <StatusBar style="auto" />
//       <Routes />
//     </>
//   );
// }

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { ThemeProvider } from './src/contexts/themeContext';

export default function App() {
    return (
        <ThemeProvider>
            <StatusBar style="auto" />
            <Routes />
        </ThemeProvider>
    );
}
