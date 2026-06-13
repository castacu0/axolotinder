import Svg, { Ellipse, Path, Circle, G } from "react-native-svg";

type Morph = {
  body: string;
  belly: string;
  gills: string;
  eye: string;
  line: string;
  speckle?: string;
};

export function Axolotl({ morph, size = 160 }: { morph: Morph; size?: number }) {
  const a = morph;
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Ellipse cx={100} cy={128} rx={52} ry={40} fill={a.belly} />
      <Path
        d="M70 150 Q60 196 84 188 Q92 168 100 168 Q108 168 116 188 Q140 196 130 150 Z"
        fill={a.body}
      />
      <Circle cx={100} cy={92} r={46} fill={a.body} />
      <G stroke={a.gills} strokeWidth={7} strokeLinecap="round" fill="none">
        <Path d="M58 78 Q34 60 30 72" />
        <Path d="M58 92 Q30 86 28 98" />
        <Path d="M60 106 Q34 112 32 124" />
        <Path d="M142 78 Q166 60 170 72" />
        <Path d="M142 92 Q170 86 172 98" />
        <Path d="M140 106 Q166 112 168 124" />
      </G>
      {a.speckle ? (
        <G fill={a.speckle} opacity={0.75}>
          <Circle cx={84} cy={78} r={2.4} />
          <Circle cx={114} cy={74} r={1.9} />
          <Circle cx={100} cy={100} r={2.2} />
          <Circle cx={76} cy={98} r={1.7} />
          <Circle cx={124} cy={94} r={2.3} />
          <Circle cx={92} cy={118} r={1.9} />
        </G>
      ) : null}
      <Circle cx={84} cy={92} r={6.5} fill={a.eye} />
      <Circle cx={116} cy={92} r={6.5} fill={a.eye} />
      <Circle cx={86} cy={90} r={2} fill="#fff" />
      <Circle cx={118} cy={90} r={2} fill="#fff" />
      <Circle cx={74} cy={104} r={5} fill={a.belly} opacity={0.85} />
      <Circle cx={126} cy={104} r={5} fill={a.belly} opacity={0.85} />
      <Path
        d="M92 106 Q100 113 108 106"
        stroke={a.line}
        strokeWidth={3.5}
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}
