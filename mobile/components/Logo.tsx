import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { GRADIENT } from "../theme/theme";

export function Logo({ size = 30 }: { size?: number }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 9 }}>
      <LinearGradient
        colors={GRADIENT}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 3.3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="flame" size={size * 0.58} color="#fff" />
      </LinearGradient>
      <Text
        style={{
          fontSize: size * 0.6,
          fontWeight: "500",
          letterSpacing: -0.3,
          color: "#C4B5FD",
        }}
      >
        AxoloTinder
      </Text>
    </View>
  );
}
