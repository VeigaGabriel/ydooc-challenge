import { useFonts } from 'expo-font'
import { useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'


import config from '../tamagui.config'
import Login from './Login'

export default function App() {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Login />
    </TamaguiProvider>
  )
}
