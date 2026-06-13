# AxoloTinder — mobile app (Expo + React Native)

The native iOS + Android app, built from the HTML mockups in `../mockups`. One codebase, file-based routing with Expo Router, TypeScript, and the same purple/pink/dark design tokens.

## Run it

On Replit or locally:

```bash
cd mobile
npm install
npx expo start
```

Then scan the QR code with the Expo Go app on your phone, or press `w` for web, `i` for the iOS simulator, `a` for Android.

If dependency versions complain, align them to the installed Expo SDK:

```bash
npx expo install --fix
```

## Structure

```
mobile/
├── app/                      Expo Router routes
│   ├── _layout.tsx           root stack + theme provider (modals declared here)
│   ├── index.tsx             splash, auto-dismisses after 2s
│   ├── onboarding.tsx        welcome slides + phone/email login
│   ├── (tabs)/
│   │   ├── _layout.tsx       bottom tab bar
│   │   ├── index.tsx         Discover (swipe deck, match overlay)
│   │   ├── likes.tsx         Likes You (blurred grid + AxoloGold upsell)
│   │   ├── messages.tsx      matches row + conversation list
│   │   └── profile.tsx       stats + menu
│   ├── edit-profile.tsx      modal: chips, photo grid, theme + distance toggles
│   ├── paywall.tsx           modal: AxoloGold plans
│   └── checkout.tsx          modal: payment methods, summary, success state
├── components/
│   ├── Axolotl.tsx           parametric axolotl drawn in react-native-svg
│   └── Logo.tsx
├── data/axolotls.ts          the six morphs + the "you" palette
└── theme/theme.tsx           dark + light color tokens, ThemeProvider, useTheme()
```

## Notes

- The axolotls are vector drawings (`react-native-svg`), the same shapes as the web mockups, so swapping a morph is swapping its color fields.
- Light mode is wired through `useTheme()`; the toggle lives in Edit Profile.
- This is a UI prototype. Auth, real matching, payments, and the conservation transfer are stubbed and need a backend.
