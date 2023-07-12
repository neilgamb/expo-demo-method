import { StyleSheet, Text, View } from "react-native";
import ignoreWarnings from "../utils/ignoreWarnings";

ignoreWarnings();

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hey there Method Devs,{"\n"}welcome to Expo 🙌
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
