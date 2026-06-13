import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../theme/theme";

export default function TabsLayout() {
  const { c } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: c.app,
          borderTopColor: c.divider,
          height: 62,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "#C084FC",
        tabBarInactiveTintColor: "#4B3A5E",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="flame" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="likes"
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="sparkles" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="messages"
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-ellipses" size={size} color={color} /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }}
      />
    </Tabs>
  );
}
