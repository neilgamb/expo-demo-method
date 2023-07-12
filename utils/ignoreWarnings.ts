import { LogBox } from "react-native";

export default function ignoreWarnings() {
  LogBox.ignoreLogs([
    `Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45.`,
    `Constants.manifest has been deprecated in favor of Constants.expoConfig.`,
  ]);
}
