import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
            }}
        >
            <Text style={{ fontFamily: "Outfit-bold", fontSize: 20 }}>Welcome to Cookmate-ai</Text>
            <Redirect href="/landing" />
        </View>
    );
}
