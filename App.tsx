import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import "react-native-gesture-handler";
import { TabNavigator } from "./src/routes/bottomTabs";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <TabNavigator />
    </GluestackUIProvider>
  );
}
