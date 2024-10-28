import { SafeAreaView, StyleSheet } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
import { PositionsScreen } from './src/presentation/screens/PositionsScreen';
import { PositionsScreen2 } from './src/presentation/screens/PositionsScreen2';
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'purple'
  }
}

export const App = () => {
  return (
    <PaperProvider 
    settings={{ icon: (props) => <IonIcon { ...props } /> }}
    theme={theme}>
    <SafeAreaView style={{ flex: 1 }}>
          {/* <HelloWorldScreen name="Jorge Silva" />   */}
          {/* <CounterScreen /> */}
          {/* <CounterM3Screen /> */}
          {/* <BoxObjectModelScreen /> */}
          {/* <DimensionScreen /> */}
          {/* <PositionsScreen2 /> */}
          <FlexDirectionScreen />
        </SafeAreaView>
    </PaperProvider>


  )
}