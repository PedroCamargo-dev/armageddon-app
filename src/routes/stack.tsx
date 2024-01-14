import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./bottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import { ServerScreen } from "../Screens/Server";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          options={{
            headerShown: false,
            title: "Voltar",
          }}
          component={TabNavigator}
        />
        <Stack.Screen
          name="ServerScreen"
          options={({ route }) => ({
            title: route.params?.name,
          })}
          component={ServerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
