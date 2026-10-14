// Nguyen Ngoc Huy Hoang - 23520532
import React from "react";
import { FlatList } from "react-native";
import PostCard from "../components/PostCard";
import { styles } from "../styles";
export default function FeedScreen({ posts, onAction }) {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.feed}
      renderItem={({ item }) => <PostCard post={item} onAction={onAction} />}
    />
  );
}
