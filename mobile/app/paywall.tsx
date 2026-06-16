import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { GOLD_GRADIENT, useTheme } from "../theme/theme";
import { ThemeToggle } from "../components/ThemeToggle";

const feats: { icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { icon: "refresh", label: "Regen ilimitado" },
  { icon: "eye", label: "Mira quién te dio like" },
  { icon: "star", label: "5 Súper Ajos cada semana" },
  { icon: "flash", label: "1 Boost gratis al mes" },
  { icon: "ban", label: "Navega sin anuncios" },
  { icon: "eye-off", label: "Modo incógnito" },
];

const plans = [
  { id: "p1", label: "1 mes", price: 199, tag: "" },
  { id: "p6", label: "6 meses", price: 149, tag: "-25%" },
  { id: "p12", label: "12 meses", price: 99, tag: "-50%" },
];

export default function Paywall() {
  const { c } = useTheme();
  const [sel, setSel] = useState("p6");
  const current = plans.find((p) => p.id === sel)!;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.app }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 18,
            paddingVertical: 8,
          }}
        >
          <Pressable onPress={() => router.back()}>
            <Ionicons name="close" size={24} color={c.tm} />
          </Pressable>
          <Text style={{ fontSize: 12, color: c.ts }}>Restaurar compra</Text>
          <ThemeToggle />
        </View>

        <View style={{ alignItems: "center", paddingHorizontal: 20, paddingTop: 6 }}>
          <LinearGradient
            colors={GOLD_GRADIENT}
            style={{ width: 54, height: 54, borderRadius: 16, alignItems: "center", justifyContent: "center" }}
          >
            <MaterialCommunityIcons name="crown" size={28} color="#3B2A08" />
          </LinearGradient>
          <Text style={{ fontSize: 24, fontWeight: "500", color: "#FBBF24", marginTop: 10 }}>
            AxoloGold
          </Text>
          <Text style={{ fontSize: 12.5, color: c.ts, marginTop: 4 }}>Regenera tu vida amorosa</Text>
        </View>

        <View style={{ paddingHorizontal: 22, paddingTop: 14 }}>
          {feats.map((f) => (
            <View key={f.label} style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 5 }}>
              <Ionicons name="checkmark-circle" size={18} color="#FBBF24" />
              <Text style={{ flex: 1, fontSize: 13, color: c.tp }}>{f.label}</Text>
              <Ionicons name={f.icon} size={15} color={c.tm} />
            </View>
          ))}
        </View>

        <View style={{ flexDirection: "row", gap: 8, paddingHorizontal: 16, paddingTop: 14 }}>
          {plans.map((p) => {
            const on = p.id === sel;
            return (
              <Pressable
                key={p.id}
                onPress={() => setSel(p.id)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingVertical: 13,
                  borderRadius: 14,
                  backgroundColor: on ? "#3B2A08" : c.surf,
                  borderWidth: 1.5,
                  borderColor: on ? "#FBBF24" : c.bd,
                }}
              >
                {p.tag ? (
                  <View
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "#C4B5FD",
                      borderRadius: 8,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                    }}
                  >
                    <Text style={{ fontSize: 9, fontWeight: "500", color: "#3B0764" }}>{p.tag}</Text>
                  </View>
                ) : null}
                <Text style={{ fontSize: 12, color: c.acc, marginBottom: 6 }}>{p.label}</Text>
                <Text style={{ fontSize: 21, fontWeight: "500", color: c.tp }}>${p.price}</Text>
                <Text style={{ fontSize: 10, color: c.tm }}>/mes</Text>
              </Pressable>
            );
          })}
        </View>

        <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
          <Pressable onPress={() => router.push("/checkout")}>
            <LinearGradient colors={GOLD_GRADIENT} style={{ padding: 15, borderRadius: 26, alignItems: "center" }}>
              <Text style={{ color: "#3B2A08", fontSize: 14, fontWeight: "500" }}>
                Hazte AxoloGold · ${current.price}/mes
              </Text>
            </LinearGradient>
          </Pressable>
          <Text style={{ fontSize: 10, color: c.tm, textAlign: "center", marginTop: 10 }}>
            Precios en MXN. Renovación automática. Cancela cuando quieras.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
