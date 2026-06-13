import { useState } from "react";
import { View, Text, Pressable, ScrollView, TextInput, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Axolotl } from "../components/Axolotl";
import { you } from "../data/axolotls";
import { useTheme } from "../theme/theme";

const ALL_INTS = [
  "Nado nocturno",
  "Chinampas",
  "Conservación",
  "Cumbia",
  "Muralismo",
  "Ciencia",
  "Antros",
];

function Label({ children }: { children: string }) {
  const { c } = useTheme();
  return (
    <Text
      style={{ fontSize: 11, fontWeight: "500", letterSpacing: 0.6, color: c.tm, marginHorizontal: 16, marginTop: 16, marginBottom: 9 }}
    >
      {children}
    </Text>
  );
}

export default function EditProfile() {
  const { c, dark, toggle } = useTheme();
  const [active, setActive] = useState<string[]>([
    "Nado nocturno",
    "Chinampas",
    "Conservación",
    "Cumbia",
  ]);
  const [showDist, setShowDist] = useState(true);

  function toggleInt(t: string) {
    setActive((v) => (v.includes(t) ? v.filter((x) => x !== t) : [...v, t]));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.app }}>
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
          <Ionicons name="chevron-down" size={24} color={c.tm} />
        </Pressable>
        <Text style={{ fontSize: 16, fontWeight: "500", color: c.tp }}>Editar perfil</Text>
        <Pressable onPress={() => router.back()}>
          <Text style={{ fontSize: 14, fontWeight: "500", color: c.pur }}>Guardar</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <Label>FOTOS</Label>
        <View style={{ flexDirection: "row", gap: 8, marginHorizontal: 16 }}>
          {[0, 1, 2].map((n) => (
            <View
              key={n}
              style={{
                flex: 1,
                height: 84,
                borderRadius: 12,
                overflow: "hidden",
                backgroundColor: "#2A1248",
                borderWidth: 1,
                borderColor: c.bd,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Axolotl morph={you} size={96} />
              {n === 0 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 5,
                    left: 5,
                    backgroundColor: "#C4B5FD",
                    borderRadius: 7,
                    paddingHorizontal: 7,
                    paddingVertical: 2,
                  }}
                >
                  <Text style={{ fontSize: 9, fontWeight: "500", color: "#3B0764" }}>Principal</Text>
                </View>
              ) : null}
            </View>
          ))}
        </View>

        <Label>ACERCA DE MÍ</Label>
        <View style={{ marginHorizontal: 16 }}>
          <TextInput
            multiline
            defaultValue="Ajolote urbano que busca quien aguante el ajetreo del canal. Regenero, luego existo."
            placeholderTextColor={c.tm}
            style={{
              minHeight: 64,
              borderRadius: 12,
              backgroundColor: c.surf,
              borderWidth: 1,
              borderColor: c.bd,
              color: c.ts,
              padding: 12,
              fontSize: 12.5,
              textAlignVertical: "top",
            }}
          />
        </View>

        <Label>INTERESES</Label>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 7, marginHorizontal: 16 }}>
          {ALL_INTS.map((t) => {
            const on = active.includes(t);
            return (
              <Pressable
                key={t}
                onPress={() => toggleInt(t)}
                style={{
                  paddingHorizontal: 13,
                  paddingVertical: 6,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: on ? c.chipBorder : c.bd,
                  backgroundColor: on ? c.chipBg : "transparent",
                }}
              >
                <Text style={{ fontSize: 11, fontWeight: "500", color: on ? c.chipText : c.ts }}>{t}</Text>
              </Pressable>
            );
          })}
        </View>

        <Label>PREFERENCIAS</Label>
        <View style={{ marginHorizontal: 16, gap: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 8 }}>
            <Text style={{ flex: 1, fontSize: 13, color: c.tp }}>Mostrar mi distancia</Text>
            <Switch
              value={showDist}
              onValueChange={setShowDist}
              trackColor={{ true: "#7C3AED", false: c.bd }}
              thumbColor="#fff"
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 8 }}>
            <Text style={{ flex: 1, fontSize: 13, color: c.tp }}>
              Tema {dark ? "oscuro" : "claro"}
            </Text>
            <Switch
              value={!dark}
              onValueChange={toggle}
              trackColor={{ true: "#7C3AED", false: c.bd }}
              thumbColor="#fff"
            />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 16,
            marginTop: 16,
            padding: 12,
            borderRadius: 13,
            backgroundColor: c.chipBg,
            borderWidth: 1,
            borderColor: c.chipBorder,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <MaterialCommunityIcons name="shield-check" size={20} color={c.pur} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12.5, fontWeight: "500", color: c.tp }}>
              Verifícate como ajolote real
            </Text>
            <Text style={{ fontSize: 10.5, color: c.ts }}>Más matches, menos bots.</Text>
          </View>
          <Ionicons name="chevron-forward" size={16} color={c.pur} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
