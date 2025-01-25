import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const App = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    });
  };

  return (
    <AppLoading
      startAsync={loadFonts}
      onFinish={() => null}
      onError={console.warn}
    />
  );
};

export default App;