import { useFonts } from "expo-font";
import { Stack, usePathname, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { AuthProvider, useAuth } from "../services/AuthProvider";



export default function RootLayout() {
    const [loaded, error] = useFonts({
        'Outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
        'Outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    });

    if (!loaded) return null;
    if (error) return null;

    return (
        <AuthProvider>
            <AuthGate />
            <Stack>
                <Stack.Screen name="landing" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="Pages/login" options={{ headerShown: false }} />
                <Stack.Screen name="Pages/signup" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="Pages/home" options={{ headerShown: false }} />
            </Stack>
        </AuthProvider>
    );
}

function AuthGate() {
    const { user, initializing } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const segments = useSegments();

    useEffect(() => {
        if (initializing) return;

        const isAuthScreen =
            pathname === "/Pages/login" || pathname === "/Pages/signup";
        const isProtected = pathname === "/Pages/home";

        if (!user && isProtected) {
            router.replace("/Pages/login" as any);
            return;
        }

        if (user && (isAuthScreen || pathname === "/landing" || pathname === "/")) {
            router.replace("/(tabs)/Home" as any);
        }
    }, [initializing, pathname, router, segments, user]);

    return null;
}
