# AxoloTinder — Prompts del Demo
## Proyecto 3: App Móvil con Claude Code + GitHub + Replit
**Instructor: Cesar Castanon · @castacu0**

---

> Estos son los prompts exactos usados en el demo en vivo. Reemplaza los [CORCHETES] para adaptar a tu propio proyecto.

---

## Los 2 prompts del demo (tal como se usaron)

**1ER PROMPT — UI y diseño inicial**

Pega esto en Claude Code (nueva sesión, carpeta vacía):

```
Create a beautiful and unique UI for my app "Axolotl Tinder"
(purple, pink and black being the top colors, following
https://obsidian.md/brand assets).
It must look like a real elite designer built it, no vibe-coded slop.

My goal is to get 50M in funding from investors to build a beta
version and sell it to Clara Brugada in CDMX.

Main screen: a swipe card showing an axolotl with name, age,
location (colonia CDMX), short bio, and interest tags. Include
match percentage and a premium "AxoloGold" tier with crown badge.
```

**2DO PROMPT — Iterar y agregar funcionalidades**

```
Great first case, now include five more axolotls. Check if there's
different colors, and give them funny Mexican names, matching with
the world axolotl.

And there's a trend in Mexico City called Ajolotizacion (search it)
AxoloTinder. Include some other features so the person feels like
it's worth it to download it.
```

---

## Versión plantilla (para tu propia app)

**1ER PROMPT:**

```
Create a beautiful and unique UI for my app "[NOMBRE DE TU APP]"
([COLOR 1], [COLOR 2] and [COLOR 3] being the top colors, following
[REFERENCIA DE DISEÑO — ej: obsidian.md/brand, linear.app, notion.so]).
It must look like a real elite designer built it, no vibe-coded slop.

My goal is to [OBJETIVO DE NEGOCIO — ej: get funding from investors /
launch a beta in CDMX / pitch to the mayor of Mexico City].

Main screen: [describe la pantalla principal — qué se muestra,
qué acciones puede hacer el usuario, qué datos aparecen].
```

**2DO PROMPT:**

```
Great first case, now include [NÚMERO] more [ELEMENTOS — ej: profiles /
products / categories / users]. Check if there are different
[VARIANTES — ej: colors / types / tiers], and give them
[CARACTERÍSTICA — ej: funny Mexican names / local CDMX references].

There's a trend called [TENDENCIA RELEVANTE AL TEMA — búscala].
Include some other features so the person feels like it's worth it to download it.
```

---

## Cómo pasar de Claude Code a Replit

**1. Sube el proyecto a GitHub**

Desde Claude Code o tu terminal:

```bash
cd [nombre-de-tu-app]
git init
git add .
git commit -m "Initial project from Claude Code"
gh repo create [nombre-del-repo] --public --source=. --push
```

*(necesitas `gh` instalado y autenticado con tu cuenta de GitHub)*

**2. Importa en Replit**

1. Entra a replit.com → **Create Repl**
2. Selecciona **Import from GitHub**
3. Pega el URL de tu repo → Import

**3. Corre la app en Replit**

```bash
npm install --legacy-peer-deps
npx expo start --tunnel
```

**4. Ábrela en tu teléfono**

1. Instala **Expo Go** en tu celular (App Store o Google Play)
2. Escanea el QR que aparece en Replit
3. La app corre en tu teléfono

---

## Estructura de archivos que genera Claude Code

```
tu-app/
├── mockups/
│   └── index.html          ← prototipo interactivo en el navegador
├── mobile/
│   ├── app/                ← pantallas en TypeScript (Expo Router)
│   │   ├── index.tsx       ← pantalla principal
│   │   ├── [screen2].tsx
│   │   └── [screen3].tsx
│   ├── components/         ← componentes reutilizables (cards, buttons, etc.)
│   ├── data/mock.ts        ← datos demo en TypeScript
│   ├── theme/colors.ts     ← paleta de colores y tipografía
│   ├── app.json            ← config de Expo (nombre, slug, íconos)
│   └── package.json        ← dependencias (expo ~52, react-native 0.76, etc.)
└── REPLIT-SETUP.md         ← instrucciones para correr en Replit
```

---

## Configurar Replit antes de la clase

**¿Qué conectar?**

| Requisito | Para qué |
|---|---|
| Cuenta de GitHub (gratis) | Para subir el código desde Claude Code |
| Cuenta de Replit (gratis) | Para correr la app sin instalar nada |
| Expo Go en tu teléfono | Para ver la app en tu celular en tiempo real |

**Replit y GitHub se conectan automáticamente** cuando eliges "Import from GitHub" en Replit. No necesitas configurar tokens ni SSH.

---

## Opciones de pago para ir más lejos

### Replit Premium ($20 USD/mes)

El plan gratuito funciona para el demo. Para producción:

- Repls siempre activos (no se duermen por inactividad)
- Más RAM y CPU para apps con más datos reales
- Dominio personalizado: `tu-app.replit.app` → `tuapp.mx`
- Despliegue en producción con un clic

### Apple Developer Account ($99 USD/año)

Para publicar en el App Store — el siguiente paso cuando el prototipo tiene usuarios reales.

**Qué incluye:**
- Publicación en App Store (iOS + macOS)
- TestFlight: betas para hasta 10,000 probadores antes de publicar
- App Analytics: descargas, retención, crashes por pantalla

**Flujo con EAS (Expo Application Services):**

```bash
npm install -g eas-cli
eas login
git clone [tu-repo]
cd tu-app/mobile
npm install --legacy-peer-deps
eas build:configure
eas build --platform ios        # tarda ~15 min
eas submit --platform ios       # sube a App Store Connect
```

Revisión de Apple: 1-3 días hábiles para apps nuevas.

---

*Cesar Castanon · @castacu0*
*Repo: github.com/castacu0/axolotinder*
*Actualizado: junio 2026*
