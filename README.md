# MacroZone

A macro tracking app built with React Native and Expo. Track your daily meals and monitor your macros (calories, protein, carbs, fat) with a clean, modern UI.

> **📌 Based on:** [React Native Crash Course](https://youtu.be/XCifkDC0yXA) by [Traversy Media](https://github.com/bradtraversy/macrozone). The original project served as a starting point — I followed along and built the app myself as part of learning React Native.

<p align="center">
  <img src="./screen.png" alt="MacroZone App" width="300" />
</p>

## Features

- Add meals with calorie and macro information
- Track daily totals for calories, protein, carbs, and fat
- View all meals or recent meals on the home screen
- Share and copy meal data
- Haptic feedback for interactions
- Daily reminder notifications (iOS)
- Data persistence with AsyncStorage
- Tab-based navigation with a modern UI

## Tech Stack

- [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (SDK 55)
- [Expo Router](https://docs.expo.dev/router/introduction/) – file-based routing
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) – local data persistence
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) – reminders
- [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) – tactile feedback
- TypeScript

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [Expo Go](https://expo.dev/go) app on your phone, or an Android/iOS emulator

### Installation

​```bash
git clone <your-repo-url>
cd macrozone
npm install
​```

### Run the App

​```bash
npx expo start
​```

Scan the QR code with Expo Go (Android) or the Camera app (iOS) to open the app on your device.

## Credits

Original project and course by [Brad Traversy](https://github.com/bradtraversy) – [Traversy Media](https://www.youtube.com/@TraversyMedia).

## License

MIT
