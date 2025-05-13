import {
  ActivityIndicator,
  BackButton,
  Button,
  Icon,
  Screen,
  Text,
  TextInput,
} from "@components";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "@theme";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    UniNeueBlack: require("./src/assets/fonts/UniNeueBlack.otf"),
    UniNeueHeavy: require("./src/assets/fonts/UniNeueHeavy.otf"),
    UniNeueBold: require("./src/assets/fonts/UniNeueBold.otf"),
    UniNeueRegular: require("./src/assets/fonts/UniNeueRegular.otf"),
    UniNeueBook: require("./src/assets/fonts/UniNeueBook.otf"),
    UniNeueLight: require("./src/assets/fonts/UniNeueLight.otf"),
    UniNeueThin: require("./src/assets/fonts/UniNeueThin.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Screen style={{ gap: 20 }} scrollable>
          <Text preset="h1">Teste h1</Text>
          <Text preset="h2">Teste h2</Text>
          <Text preset="h3">Teste h3</Text>
          <Text preset="h4">Teste h4</Text>
          <Text preset="h5">Teste h5</Text>
          <Text preset="h6">Teste h6</Text>

          <Text preset="h6">Button Primary</Text>
          <Button preset="primary" title="Primary" />
          <Button preset="primary" loading title="Primary" />
          <Button preset="primary" disabled title="Primary disabled" />

          <Text preset="h6">Button Outline</Text>
          <Button preset="outline" title="Outline" />
          <Button preset="outline" loading title="Outline" />
          <Button preset="outline" disabled title="Outline disabled" />

          <Text preset="h6">Button Gray</Text>
          <Button preset="gray" title="Gray" />
          <Button preset="gray" loading title="Gray" />
          <Button preset="gray" disabled title="Gray disabled" />

          <Text preset="h6">Button Primary</Text>
          <Button preset="ghost" title="Ghost" />
          <Button preset="ghost" loading title="Ghost" />
          <Button preset="ghost" disabled title="Ghost disabled" />

          <Text preset="h6">Activity Indicator</Text>
          <ActivityIndicator />

          <Text preset="h6">Inputs</Text>
          <TextInput label="Teste input" />
          <TextInput
            label="Teste input error"
            errorMessage="Mensagem de erro"
          />
          <TextInput label="Teste input disabled" editable={false} />

          <Text preset="h6">Icons</Text>
          <Icon name="home" />
          <Icon name="arrowRight" />
          <Icon name="arrowLeft" />
          <Icon name="bell" />
          <Icon name="bellOn" />
          <Icon name="bookmarkFill" />

          <Text preset="h6">Back button</Text>
          <BackButton />
          <BackButton showBackLabel />
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
