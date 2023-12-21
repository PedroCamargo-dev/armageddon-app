import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ServersScreen } from "../Screens/Servers";
import { AddServer } from "../Screens/AddServer";
import { Box } from "@gluestack-ui/themed";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
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
          tabBarIcon: (props) => (
            <Box
              position="absolute"
              borderRadius={100}
              backgroundColor={props.focused ? "$primary600" : "$primary400"}
              p="$2.5"
              width={props.size * 2}
              height={props.size * 2}
              bottom="$5"
              justifyContent="center"
              alignItems="center"
            >
              <Ionicons name="add" color="#fff" size={props.size} />
            </Box>
          ),
        }}
        name="Novo Servidor"
        component={AddServer}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <Box
              borderRadius="$lg"
              p="$1.5"
              width={props.size * 1.5}
              height={props.size * 1.5}
              justifyContent="center"
              alignItems="center"
            >
              <Ionicons name="server" color={props.color} size={props.size} />
            </Box>
          ),
        }}
        name="Servidores"
        component={ServersScreen}
      />
    </Tab.Navigator>
  );
}
