import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import "react-native-gesture-handler";
import { StackNavigator } from "./src/routes/stack";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StackNavigator />
      <StatusBar style="dark" />
    </GluestackUIProvider>
  );
}
