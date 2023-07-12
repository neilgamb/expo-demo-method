import { Stack } from "expo-router";
import ignoreWarnings from "../utils/ignoreWarnings";

ignoreWarnings();

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
