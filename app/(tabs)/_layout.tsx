import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Camera" }} />
      <Tabs.Screen name="native-module" options={{ title: "Native Module" }} />
      <Tabs.Screen name="pedometer" options={{ title: "Pedometer" }} />
    </Tabs>
  );
}
