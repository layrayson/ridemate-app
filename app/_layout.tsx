import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Nunito-Black": require("@/assets/fonts/Nunito/static/Nunito-Black.ttf"),
    "Nunito-BlackItalic": require("@/assets/fonts/Nunito/static/Nunito-BlackItalic.ttf"),
    "Nunito-Bold": require("@/assets/fonts/Nunito/static/Nunito-Bold.ttf"),
    "Nunito-BoldItalic": require("@/assets/fonts/Nunito/static/Nunito-BoldItalic.ttf"),
    "Nunito-ExtraBold": require("@/assets/fonts/Nunito/static/Nunito-ExtraBold.ttf"),
    "Nunito-ExtraBoldItalic": require("@/assets/fonts/Nunito/static/Nunito-ExtraBoldItalic.ttf"),
    "Nunito-ExtraLight": require("@/assets/fonts/Nunito/static/Nunito-ExtraLight.ttf"),
    "Nunito-ExtraLightItalic": require("@/assets/fonts/Nunito/static/Nunito-ExtraLightItalic.ttf"),
    "Nunito-Italic": require("@/assets/fonts/Nunito/static/Nunito-Italic.ttf"),
    "Nunito-Light": require("@/assets/fonts/Nunito/static/Nunito-Light.ttf"),
    "Nunito-LightItalic": require("@/assets/fonts/Nunito/static/Nunito-LightItalic.ttf"),
    "Nunito-Medium": require("@/assets/fonts/Nunito/static/Nunito-Medium.ttf"),
    "Nunito-MediumItalic": require("@/assets/fonts/Nunito/static/Nunito-MediumItalic.ttf"),
    "Nunito-Regular": require("@/assets/fonts/Nunito/static/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("@/assets/fonts/Nunito/static/Nunito-SemiBold.ttf"),
    "Nunito-SemiBoldItalic": require("@/assets/fonts/Nunito/static/Nunito-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
    console.log(fontsLoaded, "fontsLoaded");
    console.log(error, "error");
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
