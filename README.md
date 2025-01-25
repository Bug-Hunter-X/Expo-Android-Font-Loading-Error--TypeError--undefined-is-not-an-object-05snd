# Expo Android Font Loading Error

This repository demonstrates a bug encountered when loading custom fonts in an Expo app on Android. The app crashes with a `TypeError: undefined is not an object` error on Android emulators, while functioning correctly on iOS.

## Bug Description

The issue occurs when using `expo-font` to load a custom TTF font. The font file is correctly included in the project's `assets` folder, and there are no apparent issues in the code. The error only manifests on Android.

## Reproduction Steps

1. Clone this repository.
2. Run `expo start`.
3. Observe the app crashing on the Android emulator with the error.
4. Run the app on an iOS simulator, which should work correctly.

## Solution

This issue seems to stem from a mismatch between the font file's actual location and the path specified in the code for Android. The solution may involve a more robust way to handle the asset loading. Please refer to the `bugSolution.js` file for a potential fix using a different asset loading strategy.