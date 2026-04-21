import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigation/RootNavigator';
import { store } from './store/store';
import { appTheme } from './config/theme';
import { storageService } from './services/storageService';

const App = () => {
  useEffect(() => {
    storageService.initOfflineDatabase().catch(() => undefined);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PaperProvider theme={appTheme}>
          <RootNavigator />
        </PaperProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
