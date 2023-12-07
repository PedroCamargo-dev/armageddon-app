import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ServersScreen } from "../Screens/Servers";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="server" color={color} size={size} />
            ),
          }}
          name="Servidores"
          component={ServersScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
