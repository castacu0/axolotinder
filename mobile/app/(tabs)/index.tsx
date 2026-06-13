import { useRef, useState, type ReactNode } from "react";
import { View, Text, Pressable, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Axolotl } from "../../components/Axolotl";
import { Logo } from "../../components/Logo";
import { axolotls, you, type Axolotl as AxoType } from "../../data/axolotls";
import { useTheme } from "../../theme/theme";

function RoundButton({
  size,
  onPress,
  children,
  filled,
}: {
  size: number;
  onPress: () => void;
  children: ReactNode;
  filled?: boolean;
}) {
  const { c } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: filled ? "transparent" : "#18101F",
        borderWidth: filled ? 0 : 1,
        borderColor: "#3A2A4D",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Pressable>
  );
}

export default function Discover() {
  const { c } = useTheme();
  const [i, setI] = useState(0);
  const [matched, setMatched] = useState<AxoType | null>(null);
  const x = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;
  const a = axolotls[i % axolotls.length];

  function act(kind: "pass" | "like" | "star") {
    Animated.timing(kind === "star" ? y : x, {
      toValue: kind === "pass" ? -480 : kind === "star" ? -560 : 480,
      duration: 280,
      useNativeDriver: true,
    }).start(() => {
      x.setValue(0);
      y.setValue(0);
      if (kind !== "pass") setMatched(a);
      setI((v) => v + 1);
    });
  }

  const rotate = x.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: ["-14deg", "0deg", "14deg"],
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.app }} edges={["top"]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <Logo size={28} />
        <View
          style={{
            borderWidth: 1,
            borderColor: "#7C3AED55",
            backgroundColor: "#2A124855",
            paddingHorizontal: 9,
            paddingVertical: 4,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#C4B5FD", fontSize: 11, fontWeight: "500" }}>12 gratis hoy</Text>
        </View>
      </View>

      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 4 }}>
        <Animated.View
          style={{
            flex: 1,
            borderRadius: 26,
            overflow: "hidden",
            backgroundColor: c.card,
            borderWidth: 1,
            borderColor: c.bd,
            transform: [{ translateX: x }, { translateY: y }, { rotate }],
          }}
        >
          <LinearGradient
            colors={["#4C1D95", "#2A1248", "#160B26"] as const}
            style={{ height: 320, alignItems: "center", justifyContent: "center" }}
          >
            <Axolotl morph={a} size={210} />
            <View
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                backgroundColor: "rgba(11,6,16,0.55)",
                borderWidth: 1,
                borderColor: "#C084FC55",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "#E9D5FF", fontSize: 11, fontWeight: "500" }}>{a.morph}</Text>
            </View>
            <View
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "rgba(11,6,16,0.55)",
                borderWidth: 1,
                borderColor: "#C084FC55",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
              }}
            >
              <Ionicons name="heart" size={13} color="#F472B6" />
              <Text style={{ color: "#E9D5FF", fontSize: 11, fontWeight: "500" }}>{a.match}%</Text>
            </View>
          </LinearGradient>

          <View style={{ padding: 18 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
              <Text style={{ fontSize: 23, fontWeight: "500", color: c.tp }}>{a.name}</Text>
              <Text style={{ fontSize: 18, color: c.acc }}>{a.age}</Text>
              {a.verified ? (
                <MaterialCommunityIcons name="check-decagram" size={18} color="#C084FC" />
              ) : null}
              {a.online ? (
                <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: "#34D399" }} />
              ) : null}
            </View>
            <Text style={{ marginTop: 8, fontSize: 13, lineHeight: 19, color: c.ts }}>{a.bio}</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 7, marginTop: 12 }}>
              {a.ints.map((t, idx) => (
                <View
                  key={t}
                  style={{
                    backgroundColor: idx % 2 ? "#DB277733" : "#6D28D933",
                    borderWidth: 1,
                    borderColor: idx % 2 ? "#EC489955" : "#7C3AED55",
                    paddingHorizontal: 11,
                    paddingVertical: 5,
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ fontSize: 11, fontWeight: "500", color: idx % 2 ? "#FBCFE8" : "#E9D5FF" }}>
                    {t}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </Animated.View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          paddingVertical: 16,
        }}
      >
        <RoundButton size={48} onPress={() => setI((v) => Math.max(0, v - 1))}>
          <MaterialCommunityIcons name="rotate-left" size={20} color="#FBBF24" />
        </RoundButton>
        <RoundButton size={56} onPress={() => act("pass")}>
          <Ionicons name="close" size={26} color="#FB7185" />
        </RoundButton>
        <RoundButton size={48} onPress={() => act("star")}>
          <Ionicons name="star" size={20} color="#60A5FA" />
        </RoundButton>
        <Pressable onPress={() => act("like")}>
          <LinearGradient
            colors={["#A855F7", "#7C3AED", "#EC4899"] as const}
            style={{ width: 66, height: 66, borderRadius: 33, alignItems: "center", justifyContent: "center" }}
          >
            <Ionicons name="heart" size={30} color="#fff" />
          </LinearGradient>
        </Pressable>
        <RoundButton size={48} onPress={() => router.push("/paywall")}>
          <Ionicons name="flash" size={20} color="#C084FC" />
        </RoundButton>
      </View>

      {matched ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(8,4,14,0.94)",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <Text style={{ color: "#C4B5FD", fontSize: 12, fontWeight: "500", letterSpacing: 3 }}>
            ES UN MATCH
          </Text>
          <Text
            style={{
              color: "#F0ABFC",
              fontSize: 26,
              fontWeight: "500",
              marginVertical: 18,
              textAlign: "center",
            }}
          >
            ¡Se regeneraron juntos!
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 22 }}>
            <View
              style={{
                width: 92,
                height: 92,
                borderRadius: 46,
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "#C084FC",
                backgroundColor: "#2A1248",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Axolotl morph={you} size={120} />
            </View>
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 23,
                marginHorizontal: -12,
                zIndex: 2,
                borderWidth: 3,
                borderColor: "#0B0610",
                backgroundColor: "#A855F7",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="heart" size={22} color="#fff" />
            </View>
            <View
              style={{
                width: 92,
                height: 92,
                borderRadius: 46,
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "#F472B6",
                backgroundColor: "#2A1248",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Axolotl morph={matched} size={120} />
            </View>
          </View>
          <Text style={{ color: c.ts, fontSize: 13, marginBottom: 22, textAlign: "center" }}>
            Tú y {matched.name} nadan en la misma frecuencia.
          </Text>
          <Pressable onPress={() => setMatched(null)} style={{ width: "82%", marginBottom: 10 }}>
            <LinearGradient
              colors={["#A855F7", "#7C3AED", "#EC4899"] as const}
              style={{ padding: 13, borderRadius: 24, alignItems: "center" }}
            >
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>Mandar un mensaje</Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            onPress={() => setMatched(null)}
            style={{
              width: "82%",
              padding: 12,
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#3A2A4D",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#C4B5FD", fontSize: 14, fontWeight: "500" }}>Seguir nadando</Text>
          </Pressable>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
