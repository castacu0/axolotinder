import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Axolotl } from "../../components/Axolotl";
import { axolotls } from "../../data/axolotls";
import { useTheme } from "../../theme/theme";
import { ThemeToggle } from "../../components/ThemeToggle";

export default function Likes() {
  const { c } = useTheme();
  const tiles = axolotls.map((a, idx) => ({ a, locked: idx !== 3 }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.app }} edges={["top"]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={{ paddingHorizontal: 18, paddingTop: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 19, fontWeight: "500", color: c.tp }}>Te dieron like</Text>
              <View style={{ backgroundColor: "#FBBF24", borderRadius: 10, paddingHorizontal: 8, paddingVertical: 2 }}>
                <Text style={{ fontSize: 11, fontWeight: "500", color: "#3B0764" }}>24</Text>
              </View>
            </View>
            <ThemeToggle />
          </View>
          <Text style={{ fontSize: 11.5, color: c.tm, marginTop: 3 }}>
            Hazte AxoloGold para verlos a todos.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginTop: 14,
            gap: 10,
          }}
        >
          {tiles.map(({ a, locked }) => (
            <View
              key={a.id}
              style={{
                width: "47%",
                height: 150,
                borderRadius: 16,
                overflow: "hidden",
                backgroundColor: "#2A1248",
                borderWidth: 1,
                borderColor: c.bd,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Axolotl morph={a} size={130} />
              {locked ? (
                <BlurView
                  intensity={28}
                  tint="dark"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="lock-closed" size={24} color="#FBBF24" />
                </BlurView>
              ) : (
                <View
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "#34D399",
                    borderRadius: 8,
                    paddingHorizontal: 7,
                    paddingVertical: 2,
                  }}
                >
                  <Text style={{ fontSize: 9, fontWeight: "500", color: "#3B0764" }}>Nuevo</Text>
                </View>
              )}
              <View style={{ position: "absolute", bottom: 8, left: 10 }}>
                <Text style={{ fontSize: 12, fontWeight: "500", color: locked ? "#9C8AB5" : "#F5F3FF" }}>
                  {locked ? "Oculto" : `${a.name}, ${a.age.replace(" años", "")}`}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <Pressable
          onPress={() => router.push("/paywall")}
          style={{
            marginHorizontal: 16,
            marginTop: 14,
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
          <Text style={{ flex: 1, fontSize: 12, fontWeight: "500", color: "#F5F3FF" }}>
            Ve los 24 likes
          </Text>
          <View style={{ backgroundColor: "#FBBF24", borderRadius: 12, paddingHorizontal: 11, paddingVertical: 4 }}>
            <Text style={{ fontSize: 11, fontWeight: "500", color: "#3B2A08" }}>AxoloGold</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
