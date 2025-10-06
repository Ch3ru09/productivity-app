import { signup } from "@/services/account";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (password.trim().length < 8) {
      return setError("password must be more than 8 characters");
    }
    if (password.trim() !== confirmPassword.trim()) {
      return setError("passwords do not match");
    }
    signup(email, password)
      .then((res) => {
        console.log(res);
        router.navigate("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Sign Up" onPress={handleSignup} />
      <TouchableOpacity onPress={() => router.navigate("/login")}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {},
  input: {},
  button: {},
  errorText: { color: "red" },
  linkText: {},
});

