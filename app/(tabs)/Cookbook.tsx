import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../services/Colors";

export default function CookbookTab() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cookbook</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.White },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontFamily: "Outfit-bold", fontSize: 28, color: Colors.Black },
});

