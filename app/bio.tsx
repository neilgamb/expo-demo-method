import { StyleSheet, Text, View } from "react-native";

export default function Bio() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Here's a bio page</Text>
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
