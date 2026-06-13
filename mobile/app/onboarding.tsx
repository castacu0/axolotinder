import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Logo } from "../components/Logo";
import { Axolotl } from "../components/Axolotl";
import { axolotls } from "../data/axolotls";
import { GRADIENT, useTheme } from "../theme/theme";

const slides = [
  {
    title: "Bienvenido a AxoloTinder",
    text: "Haz match con los ajolotes más únicos de la Ciudad de México.",
  },
  {
    title: "Cada match cuenta",
    text: "Un match, un peso para restaurar el hábitat del ajolote en Xochimilco.",
  },
];

function GButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={{ width: "100%" }}>
      <LinearGradient
        colors={GRADIENT}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ padding: 15, borderRadius: 26, alignItems: "center" }}
      >
        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

export default function Onboarding() {
  const { c } = useTheme();
  const [phase, setPhase] = useState<"slides" | "login">("slides");
  const [idx, setIdx] = useState(0);
  const [mode, setMode] = useState<"tel" | "mail">("tel");
  const [value, setValue] = useState("");

  if (phase === "slides") {
    const s = slides[idx];
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: c.app, padding: 24 }}>
        <View style={{ alignItems: "flex-end" }}>
          <Pressable onPress={() => setPhase("login")}>
            <Text style={{ color: c.ts, fontSize: 13 }}>Saltar</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 22 }}>
          {idx === 0 ? (
            <Axolotl morph={axolotls[0]} size={160} />
          ) : (
            <View
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                backgroundColor: "#2A1248",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="heart-circle" size={84} color="#F0ABFC" />
            </View>
          )}
          <Text style={{ fontSize: 23, fontWeight: "500", color: c.tp, textAlign: "center" }}>
            {s.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 22,
              color: c.ts,
              textAlign: "center",
              maxWidth: 250,
            }}
          >
            {s.text}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 7, justifyContent: "center", marginBottom: 18 }}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={{
                width: i === idx ? 22 : 7,
                height: 7,
                borderRadius: 4,
                backgroundColor: i === idx ? "#C084FC" : "#3A2A4D",
              }}
            />
          ))}
        </View>
        <GButton
          label={idx < slides.length - 1 ? "Continuar" : "Empezar"}
          onPress={() => (idx < slides.length - 1 ? setIdx(idx + 1) : setPhase("login"))}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.app, padding: 24 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 30 }}>
        <Pressable onPress={() => setPhase("slides")}>
          <Ionicons name="chevron-back" size={24} color={c.tm} />
        </Pressable>
        <Logo size={26} />
      </View>
      <Text style={{ fontSize: 22, fontWeight: "500", color: c.tp }}>Entra o crea tu cuenta</Text>
      <Text style={{ fontSize: 13, color: c.ts, marginTop: 6, marginBottom: 24 }}>
        Te enviaremos un código para verificar.
      </Text>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: c.surf,
          borderColor: c.bd,
          borderWidth: 1,
          borderRadius: 13,
          padding: 4,
          marginBottom: 16,
        }}
      >
        {(["tel", "mail"] as const).map((m) => (
          <Pressable
            key={m}
            onPress={() => setMode(m)}
            style={{
              flex: 1,
              padding: 9,
              borderRadius: 10,
              backgroundColor: mode === m ? "#7C3AED" : "transparent",
              alignItems: "center",
            }}
          >
            <Text style={{ color: mode === m ? "#fff" : c.ts, fontSize: 13, fontWeight: "500" }}>
              {m === "tel" ? "Teléfono" : "Correo"}
            </Text>
          </Pressable>
        ))}
      </View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={mode === "tel" ? "55 1234 5678" : "tu@correo.com"}
        placeholderTextColor={c.tm}
        keyboardType={mode === "tel" ? "phone-pad" : "email-address"}
        autoCapitalize="none"
        style={{
          height: 48,
          borderColor: c.bd,
          borderWidth: 1,
          borderRadius: 13,
          backgroundColor: c.surf,
          color: c.tp,
          paddingHorizontal: 14,
          fontSize: 14,
        }}
      />
      <View style={{ flex: 1 }} />
      <GButton label="Continuar" onPress={() => router.replace("/(tabs)")} />
      <Text
        style={{
          fontSize: 10.5,
          color: c.tm,
          textAlign: "center",
          marginTop: 14,
          lineHeight: 16,
        }}
      >
        Al continuar aceptas los Términos y el Aviso de Privacidad de AxoloTinder.
      </Text>
    </SafeAreaView>
  );
}
