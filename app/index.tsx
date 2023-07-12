import { StyleSheet, Text, View, LogBox } from "react-native";

LogBox.ignoreLogs([
  `Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45.`,
  `Constants.manifest has been deprecated in favor of Constants.expoConfig.`,
]);

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hey there Method Devs,{"\n"}welcome to Expo 😏
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
  },
});
