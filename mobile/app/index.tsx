import { useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { Logo } from "../components/Logo";
import { Axolotl } from "../components/Axolotl";
import { axolotls } from "../data/axolotls";
import { useTheme } from "../theme/theme";

export default function Splash() {
  const { c } = useTheme();

  useEffect(() => {
    const t = setTimeout(() => router.replace("/onboarding"), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: c.app,
        alignItems: "center",
        justifyContent: "center",
        gap: 26,
      }}
    >
      <Logo size={34} />
      <Axolotl morph={axolotls[0]} size={150} />
      <Text style={{ color: c.tm, fontSize: 12 }}>Llenando tu estanque...</Text>
    </View>
  );
}
