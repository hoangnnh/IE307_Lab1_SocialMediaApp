// Nguyen Ngoc Huy Hoang - 23520532
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { initialPosts } from './src/data';
import { updatePost } from './src/state.mjs';
import { styles } from './src/styles';
import FeedScreen from './src/screens/FeedScreen';

export default function App() {
  const [posts, setPosts] = useState(initialPosts);
  const onAction = (id, action) => {
    setPosts(previous => updatePost(previous, id, action));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />
        <View style={styles.app}>
          <View style={styles.header}>
            <View style={styles.brandRow}>
              <Text style={styles.brand}>23520532</Text>
              <Text style={styles.lab}>IE307 - LAB 01 / BÀI 1</Text>
            </View>
            <Text accessibilityRole="header" style={styles.title}>Social Media Feed</Text>
            <Text style={styles.subtitle}>Small moments. Good company.</Text>
          </View>
          <FeedScreen posts={posts} onAction={onAction} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
