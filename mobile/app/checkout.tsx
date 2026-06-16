import { useRef, useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView, TextInput, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { GOLD_GRADIENT, useTheme } from "../theme/theme";
import { ThemeToggle } from "../components/ThemeToggle";

const methods: { id: string; icon: keyof typeof MaterialCommunityIcons.glyphMap; name: string; sub: string }[] = [
  { id: "card", icon: "credit-card-outline", name: "Tarjeta de crédito", sub: "Visa ···· 4242" },
  { id: "oxxo", icon: "storefront-outline", name: "OXXO", sub: "Paga en efectivo" },
  { id: "mp", icon: "wallet-outline", name: "Mercado Pago", sub: "Conecta tu cuenta" },
];

const UNLOCKED = [
  { icon: "refresh" as const, label: "Regen ilimitado activado" },
  { icon: "eye" as const, label: "Ya puedes ver todos tus likes" },
  { icon: "star" as const, label: "5 Súper Ajos disponibles" },
  { icon: "flash" as const, label: "1 Boost gratis listo" },
];

export default function Checkout() {
  const { c } = useTheme();
  const [method, setMethod] = useState("card");
  const [done, setDone] = useState(false);
  const successScale = useRef(new Animated.Value(0.7)).current;
  const successOpacity = useRef(new Animated.Value(0)).current;
  const crownPulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (done) {
      Animated.parallel([
        Animated.spring(successScale, { toValue: 1, useNativeDriver: true, bounciness: 12 }),
        Animated.timing(successOpacity, { toValue: 1, duration: 350, useNativeDriver: true }),
      ]).start(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(crownPulse, { toValue: 1.10, duration: 900, useNativeDriver: true }),
            Animated.timing(crownPulse, { toValue: 1, duration: 900, useNativeDriver: true }),
          ])
        ).start();
      });
    }
  }, [done]);

  function SumRow({ k, v, color, bold }: { k: string; v: string; color?: string; bold?: boolean }) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 6 }}>
        <Text style={{ fontSize: bold ? 14 : 13, fontWeight: bold ? "500" : "400", color: bold ? c.tp : c.ts }}>{k}</Text>
        <Text style={{ fontSize: bold ? 16 : 13, fontWeight: bold ? "500" : "400", color: color || c.tp }}>{v}</Text>
      </View>
    );
  }

  if (done) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: c.app }}>
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 28,
            gap: 16,
            opacity: successOpacity,
            transform: [{ scale: successScale }],
          }}
        >
          <View style={{ position: "absolute", top: "14%", left: "10%" }}>
            <Text style={{ fontSize: 22 }}>✨</Text>
          </View>
          <View style={{ position: "absolute", top: "11%", right: "15%" }}>
            <Text style={{ fontSize: 17 }}>⭐</Text>
          </View>
          <View style={{ position: "absolute", bottom: "20%", left: "7%" }}>
            <Text style={{ fontSize: 19 }}>✨</Text>
          </View>
          <View style={{ position: "absolute", bottom: "18%", right: "9%" }}>
            <Text style={{ fontSize: 15 }}>🌟</Text>
          </View>

          <Animated.View style={{ transform: [{ scale: crownPulse }] }}>
            <LinearGradient
              colors={GOLD_GRADIENT}
              style={{ width: 96, height: 96, borderRadius: 48, alignItems: "center", justifyContent: "center" }}
            >
              <MaterialCommunityIcons name="crown" size={52} color="#3B2A08" />
            </LinearGradient>
          </Animated.View>

          <Text style={{ fontSize: 26, fontWeight: "500", color: "#FBBF24", textAlign: "center" }}>
            ¡Ya eres AxoloGold!
          </Text>
          <Text style={{ fontSize: 13.5, color: c.ts, textAlign: "center", lineHeight: 22 }}>
            Tu plan de 6 meses ya está activo.{"\n"}
            Un peso de tu compra va a Xochimilco 🦎
          </Text>

          <View
            style={{
              backgroundColor: "rgba(251,191,36,0.08)",
              borderWidth: 1,
              borderColor: "rgba(251,191,36,0.25)",
              borderRadius: 16,
              padding: 14,
              width: "100%",
              gap: 10,
            }}
          >
            {UNLOCKED.map((f) => (
              <View key={f.label} style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <View
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    backgroundColor: "rgba(251,191,36,0.20)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name={f.icon} size={14} color="#FBBF24" />
                </View>
                <Text style={{ fontSize: 12.5, color: c.tp }}>{f.label}</Text>
              </View>
            ))}
          </View>

          <Pressable onPress={() => router.dismissAll()} style={{ width: "100%", marginTop: 4 }}>
            <LinearGradient colors={GOLD_GRADIENT} style={{ padding: 14, borderRadius: 26, alignItems: "center" }}>
              <Text style={{ color: "#3B2A08", fontSize: 15, fontWeight: "500" }}>Empezar a nadar 🌊</Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.app }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingVertical: 12,
          }}
        >
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={c.tm} />
          </Pressable>
          <Text style={{ fontSize: 16, fontWeight: "500", color: c.tp }}>Confirmar pago</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <ThemeToggle />
            <Ionicons name="lock-closed" size={18} color={c.on} />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 16,
            padding: 13,
            borderRadius: 15,
            backgroundColor: "rgba(251,191,36,0.10)",
            borderWidth: 1,
            borderColor: "rgba(251,191,36,0.35)",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <LinearGradient colors={GOLD_GRADIENT} style={{ width: 42, height: 42, borderRadius: 12, alignItems: "center", justifyContent: "center" }}>
            <MaterialCommunityIcons name="crown" size={22} color="#3B2A08" />
          </LinearGradient>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, fontWeight: "500", color: c.tp }}>AxoloGold · 6 meses</Text>
            <Text style={{ fontSize: 11.5, color: c.ts }}>$149/mes · el plan más popular</Text>
          </View>
          <View style={{ backgroundColor: "#FBBF24", borderRadius: 10, paddingHorizontal: 9, paddingVertical: 3 }}>
            <Text style={{ fontSize: 11, fontWeight: "500", color: "#3B2A08" }}>-25%</Text>
          </View>
        </View>

        <Text style={{ fontSize: 11, fontWeight: "500", letterSpacing: 0.6, color: c.tm, marginHorizontal: 16, marginTop: 16, marginBottom: 8 }}>
          MÉTODO DE PAGO
        </Text>
        <View style={{ marginHorizontal: 16, gap: 8 }}>
          {methods.map((m) => {
            const on = m.id === method;
            return (
              <Pressable
                key={m.id}
                onPress={() => setMethod(m.id)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 11,
                  padding: 11,
                  borderRadius: 13,
                  borderWidth: 1,
                  borderColor: on ? c.pur : c.bd,
                  backgroundColor: on ? c.chipBg : c.surf,
                }}
              >
                <MaterialCommunityIcons name={m.icon} size={22} color={c.acc} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 13, fontWeight: "500", color: c.tp }}>{m.name}</Text>
                  <Text style={{ fontSize: 11, color: c.ts }}>{m.sub}</Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: on ? c.pur : c.bd,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {on ? <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: c.pur }} /> : null}
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={{ flexDirection: "row", gap: 8, marginHorizontal: 16, marginTop: 14 }}>
          <TextInput
            placeholder="Código promocional"
            placeholderTextColor={c.tm}
            style={{
              flex: 1,
              height: 38,
              borderRadius: 11,
              borderWidth: 1,
              borderColor: c.bd,
              backgroundColor: c.surf,
              color: c.tp,
              paddingHorizontal: 12,
              fontSize: 13,
            }}
          />
          <Pressable
            style={{
              height: 38,
              paddingHorizontal: 16,
              borderRadius: 11,
              borderWidth: 1,
              borderColor: c.bd,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: c.acc, fontSize: 13, fontWeight: "500" }}>Aplicar</Text>
          </Pressable>
        </View>

        <Text style={{ fontSize: 11, fontWeight: "500", letterSpacing: 0.6, color: c.tm, marginHorizontal: 16, marginTop: 16, marginBottom: 4 }}>
          RESUMEN
        </Text>
        <View style={{ marginHorizontal: 16 }}>
          <SumRow k="Subtotal (6 meses)" v="$1,194" />
          <SumRow k="Descuento AxoloGold" v="-$300" color={c.on} />
          <View style={{ height: 1, backgroundColor: c.divider, marginVertical: 6 }} />
          <SumRow k="Total" v="$894 MXN" bold />
        </View>

        <View style={{ paddingHorizontal: 16, paddingTop: 14 }}>
          <Pressable onPress={() => setDone(true)}>
            <LinearGradient
              colors={GOLD_GRADIENT}
              style={{ padding: 14, borderRadius: 26, alignItems: "center", flexDirection: "row", justifyContent: "center", gap: 7 }}
            >
              <Ionicons name="lock-closed" size={16} color="#3B2A08" />
              <Text style={{ color: "#3B2A08", fontSize: 14, fontWeight: "500" }}>Pagar $894 MXN</Text>
            </LinearGradient>
          </Pressable>
          <Text style={{ fontSize: 10, color: c.tm, textAlign: "center", marginTop: 10 }}>
            Pago protegido. Renovación cada 6 meses. Cancela cuando quieras.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
