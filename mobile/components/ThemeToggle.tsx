import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/theme";

export function ThemeToggle({ size = 19 }: { size?: number }) {
  const { dark, toggle, c } = useTheme();
  return (
    <Pressable
      onPress={toggle}
      style={{
        width: size + 14,
        height: size + 14,
        borderRadius: (size + 14) / 2,
        backgroundColor: c.surf,
        borderWidth: 1,
        borderColor: c.bd,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons
        name={dark ? "sunny-outline" : "moon-outline"}
        size={size}
        color={dark ? "#FBBF24" : "#6D28D9"}
      />
    </Pressable>
  );
}
