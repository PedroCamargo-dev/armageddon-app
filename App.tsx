import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import "react-native-gesture-handler";
import { StackNavigator } from "./src/routes/stack";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StackNavigator />
    </GluestackUIProvider>
  );
}
