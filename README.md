# 🌐 Modern Website with Prismic & Next.js
Dieses Projekt ist eine moderne, datengetriebene Website, die mithilfe von Prismic, Next.js, und TailwindCSS entwickelt wurde. Sie bietet dynamische Inhalte, die direkt aus der Prismic-API geladen werden, und eine benutzerfreundliche Architektur für Content-Management und Designanpassungen.

## 🎯 Ziel des Projekts
- Dynamisches Content-Management durch die Integration mit Prismic CMS.
- Performance-Optimierung durch serverseitige Rendering-Funktionen von Next.js.
- Modernes Design mit TailwindCSS und flexiblen Slice-Komponenten.

## 🌟 Features
- Prismic CMS Integration: Dynamische Inhalte, die direkt aus dem Prismic-Dashboard verwaltet werden können.
- Serverseitiges Rendering (SSR): Optimierte Performance und SEO durch getStaticProps und getStaticPaths.
- Komponentenbasierte Architektur: Wiederverwendbare Slices wie Hero, Showcase, Bento und CallToAction.
- Responsives Design: Optimiert für Mobilgeräte und Desktops.
- Custom Animations: Animierte Inhalte mit GSAP und ScrollTrigger für ein ansprechendes Benutzererlebnis.
- Slice Simulator: Vorschau und Anpassung der Prismic-Slices in einer Entwicklungsumgebung.

## 📂 Projektstruktur
```
/
├── src/
│   ├── app/                      # Next.js Pages und API-Routen
│   │   ├── [uid]/page.tsx        # Dynamische Seiten mit UID
│   │   ├── case-study/[uid]/     # Case-Study-spezifische Seiten
│   │   ├── slice-simulator/      # Slice Simulator
│   │   └── layout.tsx            # Hauptlayout mit Header & Footer
│   ├── components/               # Wiederverwendbare Komponenten
│   ├── hooks/                    # Benutzerdefinierte Hooks
│   ├── slices/                   # Prismic Slices wie Bento, Showcase
│   └── globals.css               # Globale Tailwind-Stile
├── customtypes/                  # Prismic Content-Modelle
├── public/                       # Statische Assets wie Bilder
├── .eslintrc.json                # ESLint-Konfiguration
├── tailwind.config.js            # TailwindCSS-Konfiguration
├── slicemachine.config.json      # Prismic Slice Machine Konfiguration
└── package.json                  # Projektabhängigkeiten und Skripte
```

## 🚀 Technologien
- Next.js: React-Framework für SSR und API-Routing.
- Prismic: Headless CMS zur Verwaltung dynamischer Inhalte.
- TailwindCSS: Utility-First CSS-Framework für schnelles Styling.
- GSAP: Animationsbibliothek für beeindruckende Scroll- und Interaktionsanimationen.
- TypeScript: Typensicherheit und bessere Entwicklererfahrung.
- Slice Machine: Werkzeug zur Erstellung und Verwaltung von Prismic-Slices.

## 📝 Lernpunkte
Während der Arbeit an diesem Projekt wurden folgende Technologien und Konzepte vertieft:

- Integration von Prismic CMS: Aufbau eines flexiblen und dynamischen Content-Management-Systems.
- Next.js Funktionen: Implementierung von SSR, SSG und dynamischen Routen.
- TailwindCSS: Gestaltung eines konsistenten und modernen Designs.
- GSAP Animationslogik: Erstellung von Scroll-Animationen und visuellem Feedback.
- Slice-basierte Architektur: Modularisierung und Wiederverwendbarkeit von Inhaltskomponenten.

## ⚙️ Installation und Verwendung
### 1. Repository klonen:
```
git clone https://github.com/PeterKlass/modernwebsite.git
cd modernwebsite
```

### 2. Abhängigkeiten installieren:
```
npm install
```

### 3. Entwicklungsserver starten:
```
npm run dev
```

### 4. Produktions-Build erstellen:
```
npm run build
npm start
```

## 📦 Verwendete Slices
Die Website verwendet mehrere benutzerdefinierte Slices:

- Hero: Darstellung von Schlüsselinhalten mit auffälligem Design.
- Showcase: Präsentation von Projekten oder Diensten.
- Bento: Flexible Grid-Layouts für verschiedene Inhalte.
- Case Studies: Dedizierte Seiten für Fallstudien.

## 🖥️ Live-Demo
Die Live-Version dieses Projekts ist hier verfügbar: https://modernwebsite-zeta.vercel.app/

## 🔗 Weitere Projekte
Weitere meiner Projekte findest du hier: https://github.com/PeterKlass

## 🤝 Credits
Dieses Projekt wurde mit Hilfe eines Prismic-Tutorials erstellt und angepasst. Dank an die Prismic-Community und die Autoren des Tutorials für die wertvollen Ressourcen!
