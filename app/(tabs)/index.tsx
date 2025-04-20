import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'faaza' && password === '12345') {
      setErrorMessage('');
      alert('Login berhasil');
    } else {
      setErrorMessage('Username atau password salah');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#243140" />
      <Text style={styles.title}>Selamat Datang</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#8AA9B0"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8AA9B0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {errorMessage !== '' && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#243140',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BDF26D',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#266D99',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#ffffff',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#BDF26D',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#243140',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: '#FF6B6B',
    marginBottom: 10,
    textAlign: 'center',
  },
});
