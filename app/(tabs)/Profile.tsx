import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../services/AuthProvider";
import { Colors } from "../../services/Colors";

export default function ProfileTab() {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const displayName =
    user?.displayName?.trim() ||
    user?.email?.split("@")[0] ||
    "User";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{displayName}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email ?? "Unknown"}</Text>

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          disabled={loading}
          onPress={async () => {
            try {
              setLoading(true);
              await signOut();
            } finally {
              setLoading(false);
            }
          }}
        >
          {loading ? <ActivityIndicator color={Colors.White} /> : <Text style={styles.buttonText}>Logout</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.White },
  content: { flex: 1, padding: 24, justifyContent: "center" },
  title: { fontFamily: "Outfit-bold", fontSize: 30, color: Colors.Black, textAlign: "center", marginBottom: 18 },
  label: { fontFamily: "Outfit", fontSize: 14, color: Colors.Gray, marginTop: 10 },
  value: { fontFamily: "Outfit-bold", fontSize: 16, color: Colors.Black, marginTop: 4 },
  button: {
    backgroundColor: Colors.primary,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    elevation: 2,
    shadowColor: Colors.Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: { color: Colors.White, fontSize: 18, fontFamily: "Outfit-bold" },
});

