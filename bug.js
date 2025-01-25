import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  // ... rest of your app
};

export default App;