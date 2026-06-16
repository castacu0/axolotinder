import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Axolotl } from "../../components/Axolotl";
import { you } from "../../data/axolotls";
import { useTheme } from "../../theme/theme";
import { ThemeToggle } from "../../components/ThemeToggle";

const stats = [
  { n: "128", l: "Likes" },
  { n: "32", l: "Matches" },
  { n: "540", l: "Visitas" },
];

const menu: { icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { icon: "settings-outline", label: "Configuración" },
  { icon: "options-outline", label: "Ajustes de descubrimiento" },
  { icon: "shield-checkmark-outline", label: "Privacidad y seguridad" },
  { icon: "help-circle-outline", label: "Ayuda" },
];

export default function Profile() {
  const { c } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.app }} edges={["top"]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 18,
            paddingTop: 12,
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "500", color: c.tp }}>Mi perfil</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <ThemeToggle />
            <Ionicons name="settings-outline" size={21} color={c.tm} />
          </View>
        </View>

        <View style={{ alignItems: "center", paddingTop: 8 }}>
          <View
            style={{
              width: 92,
              height: 92,
              borderRadius: 46,
              overflow: "hidden",
              borderWidth: 3,
              borderColor: "#7C3AED",
              backgroundColor: "#2A1248",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Axolotl morph={you} size={120} />
          </View>
          <View
            style={{
              marginTop: -12,
              backgroundColor: "#7C3AED",
              borderRadius: 11,
              paddingHorizontal: 10,
              paddingVertical: 3,
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#fff" }}>Perfil 80%</Text>
          </View>
          <Text style={{ marginTop: 12, fontSize: 20, fontWeight: "500", color: c.tp }}>Tú, 27</Text>
          <Text style={{ fontSize: 12, color: c.ts, marginTop: 2 }}>Ajolote urbano · CDMX</Text>
          <Pressable
            onPress={() => router.push("/edit-profile")}
            style={{
              marginTop: 12,
              paddingHorizontal: 22,
              paddingVertical: 9,
              borderRadius: 22,
              borderWidth: 1,
              borderColor: "#7C3AED",
            }}
          >
            <Text style={{ color: "#C4B5FD", fontSize: 13, fontWeight: "500" }}>Editar perfil</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => router.push("/paywall")}
          style={{
            marginHorizontal: 16,
            marginTop: 16,
            padding: 12,
            borderRadius: 14,
            backgroundColor: "#3B2A08",
            borderWidth: 1,
            borderColor: "#FBBF2455",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <MaterialCommunityIcons name="crown" size={20} color="#FBBF24" />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12.5, fontWeight: "500", color: "#F5F3FF" }}>Mejora a AxoloGold</Text>
            <Text style={{ fontSize: 10.5, color: c.ts }}>Regen ilimitado y más</Text>
          </View>
          <Ionicons name="chevron-forward" size={17} color="#FBBF24" />
        </Pressable>

        <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 16, marginTop: 16 }}>
          {stats.map((s) => (
            <View
              key={s.l}
              style={{ flex: 1, alignItems: "center", backgroundColor: c.surf, borderRadius: 12, paddingVertical: 11 }}
            >
              <Text style={{ fontSize: 19, fontWeight: "500", color: c.tp }}>{s.n}</Text>
              <Text style={{ fontSize: 11, color: c.tm, marginTop: 2 }}>{s.l}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 14 }}>
          {menu.map((m) => (
            <View
              key={m.label}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 13,
                paddingHorizontal: 18,
                paddingVertical: 13,
                borderBottomWidth: 1,
                borderBottomColor: c.divider,
              }}
            >
              <Ionicons name={m.icon} size={19} color="#C084FC" />
              <Text style={{ flex: 1, fontSize: 13.5, color: c.tp }}>{m.label}</Text>
              <Ionicons name="chevron-forward" size={17} color={c.tm} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
