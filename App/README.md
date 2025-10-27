# Chas Advance Team 7 Mobilapplikation

## Projektbeskrivning

Detta är den mobila frontend-delen av **Team 7:s** projekt. Applikationen är byggd med React Native och syftar till att erbjuda en smidig användarupplevelse för mobilanvändare.

## Teknikstack

- **React Native** – för mobilapplikationsutveckling  
- **Expo** – för snabb utveckling och testning  
- **React Navigation** – för hantering av navigering  
- **Fetch** – för API-anrop  
- **TypeScript** – logik och funktionalitet 

## Mappstruktur

```text
Frontend/App/
├── context/            # Hantering av användar- och global state
├── src/
│   ├── Api/            # API-anrop och backend-integrationer
│   ├── Assets/         # Bilder, ikoner och andra statiska resurser
│   ├── Components/     # Återanvändbara UI-komponenter
│   ├── Hooks/          # Custom React hooks för logik och state-hantering
│   ├── Navigation/     # Navigeringslogik och routing
│   ├── Screens/        # Applikationens olika skärmar
│   ├── Styles/         # Färgtema för applikationen
├── tests/              # Enhetstester
├── App.tsx             # Applikationens huvudkomponent och startpunkt
├── app.json            # Konfigurationsfil för Expo
├── index.ts            # Startpunkt för applikationen
├── package.json        # Projektets beroenden och scripts
├── tsconfig.json       # TypeScript-konfiguration
└── declarations.d.ts   # Typdefinitioner för externa moduler
```

## Komma igång

### 1. Klona repot

```bash
git clone https://github.com/Chas-Academy-Chas-Advance-Group-7/Frontend.git
cd App
```

### 2. Installera beroenden

```bash
npm install
```

### 3. Starta utvecklingsservern

```bash
npx expo start
```

Detta startar Expo, och du kan sedan testa appen i en simulator/emulator eller en fysisk enhet via Expo Go. För att testa på en fysisk enhet laddar du ner appen Expo Go och skannar QR-koden.

## Funktioner

- Logga in som förare eller kund (mottagare/avsändare)
- Förare: Se leveranspunkter på en interaktiv karta
- Förare: Listvy av dina lastade paket
- Förare: Möjlighet att scanna QR-kod för att lägga till paket
- Kund: Se leverantörens nuvarande position på en interaktiv karta
- Kund: Listvy av dina skickade/inkommande paket
- Förare/Kund: Överblick av dina pakets sensorvärden, samt möjlighet att se värden för ett specifikt paket
- Förare/Kund: Användaren aviseras ifall gränsvärden överstigs

## Team

- Sandra Karlberg: Kart- och GPS-funktion, paketlista med modal, kontext och navigering, layout
- Tova Hansen: Kamera och QR-scanningsfunktion, varningskomponent för sensorvärden, aviseringar, layout
