import { useState } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { GOLD_GRADIENT, useTheme } from "../theme/theme";

const methods: { id: string; icon: keyof typeof MaterialCommunityIcons.glyphMap; name: string; sub: string }[] = [
  { id: "card", icon: "credit-card-outline", name: "Tarjeta de crédito", sub: "Visa ···· 4242" },
  { id: "oxxo", icon: "storefront-outline", name: "OXXO", sub: "Paga en efectivo" },
  { id: "mp", icon: "wallet-outline", name: "Mercado Pago", sub: "Conecta tu cuenta" },
];

export default function Checkout() {
  const { c } = useTheme();
  const [method, setMethod] = useState("card");
  const [done, setDone] = useState(false);

  function SumRow({ k, v, color, bold }: { k: string; v: string; color?: string; bold?: boolean }) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 6 }}>
        <Text style={{ fontSize: bold ? 14 : 13, fontWeight: bold ? "500" : "400", color: bold ? c.tp : c.ts }}>
          {k}
        </Text>
        <Text style={{ fontSize: bold ? 16 : 13, fontWeight: bold ? "500" : "400", color: color || c.tp }}>
          {v}
        </Text>
      </View>
    );
  }

  if (done) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: c.app, alignItems: "center", justifyContent: "center", padding: 30, gap: 18 }}>
        <LinearGradient colors={GOLD_GRADIENT} style={{ width: 76, height: 76, borderRadius: 38, alignItems: "center", justifyContent: "center" }}>
          <MaterialCommunityIcons name="crown" size={40} color="#3B2A08" />
        </LinearGradient>
        <Text style={{ fontSize: 21, fontWeight: "500", color: c.tp, textAlign: "center" }}>Ya eres AxoloGold</Text>
        <Text style={{ fontSize: 13, color: c.ts, textAlign: "center" }}>
          Regen ilimitado activado. Tu primer peso ya va para Xochimilco.
        </Text>
        <Pressable
          onPress={() => router.dismissAll()}
          style={{ marginTop: 6, paddingHorizontal: 26, paddingVertical: 12, borderRadius: 24, borderWidth: 1, borderColor: "#3A2A4D" }}
        >
          <Text style={{ color: "#C4B5FD", fontSize: 13, fontWeight: "500" }}>Volver a nadar</Text>
        </Pressable>
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
          <Ionicons name="lock-closed" size={18} color={c.on} />
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
