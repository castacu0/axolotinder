import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Axolotl } from "../../components/Axolotl";
import { axolotls } from "../../data/axolotls";
import { useTheme } from "../../theme/theme";
import { ThemeToggle } from "../../components/ThemeToggle";

const convs = [
  { id: "xochitl", last: "¿Nadamos en Cuemanco el finde?", time: "2 min", unread: true },
  { id: "goldo", last: "jaja sí, brillo solito", time: "1 h", unread: true },
  { id: "chela", last: "Mijo, ¿ya comiste?", time: "3 h", unread: false },
  { id: "frida", last: "Te mando el mural que pinté", time: "1 d", unread: false },
  { id: "glowberto", last: "Conéctame al UV y vemos", time: "2 d", unread: false },
];

function Avatar({ id, size }: { id: string; size: number }) {
  const a = axolotls.find((x) => x.id === id)!;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: "hidden",
        backgroundColor: "#2A1248",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Axolotl morph={a} size={size + 12} />
    </View>
  );
}

export default function Messages() {
  const { c } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.app }} edges={["top"]}>
      <ScrollView>
        <View style={{ paddingHorizontal: 18, paddingTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 19, fontWeight: "500", color: c.tp }}>Mensajes</Text>
          <ThemeToggle />
        </View>

        <View style={{ paddingLeft: 16, paddingTop: 14, paddingBottom: 6 }}>
          <Text style={{ fontSize: 11, fontWeight: "500", letterSpacing: 0.5, color: c.tm, marginBottom: 12 }}>
            NUEVOS MATCHES
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginRight: 14 }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 29,
                  borderWidth: 2,
                  borderColor: "#FBBF24",
                  borderStyle: "dashed",
                  backgroundColor: "#2A1248",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 17, fontWeight: "500", color: "#FBBF24" }}>24</Text>
              </View>
              <Text style={{ fontSize: 10, color: c.ts, marginTop: 4 }}>Likes</Text>
            </View>
            {["xochitl", "goldo", "frida", "glowberto"].map((id) => (
              <View key={id} style={{ alignItems: "center", marginRight: 14 }}>
                <View style={{ borderWidth: 2, borderColor: "#C084FC", borderRadius: 31, padding: 0 }}>
                  <Avatar id={id} size={56} />
                </View>
                <Text style={{ fontSize: 10, color: c.ts, marginTop: 4 }}>
                  {axolotls.find((x) => x.id === id)!.name.split(" ")[0]}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ borderTopWidth: 1, borderTopColor: c.divider, marginTop: 8 }}>
          {convs.map((m) => {
            const a = axolotls.find((x) => x.id === m.id)!;
            return (
              <View
                key={m.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 11,
                }}
              >
                <Avatar id={m.id} size={46} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: "500", color: c.tp }}>{a.name}</Text>
                  <Text numberOfLines={1} style={{ fontSize: 12, color: m.unread ? c.acc : c.tm }}>
                    {m.last}
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 10.5, color: c.tm }}>{m.time}</Text>
                  {m.unread ? (
                    <View
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: 5,
                        backgroundColor: "#EC4899",
                        marginTop: 5,
                      }}
                    />
                  ) : null}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
