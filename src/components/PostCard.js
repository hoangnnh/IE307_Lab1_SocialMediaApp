// Nguyen Ngoc Huy Hoang - 23520532
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../styles";
export default function PostCard({ post, onAction }) {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image
          source={post.avatar}
          style={styles.avatar}
          accessibilityLabel={`${post.name}'s avatar`}
        />
        <View style={styles.flex}>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.meta}>{post.handle}</Text>
        </View>
      </View>
      <Text style={styles.postText}>{post.content}</Text>
      <Image
        source={post.image}
        style={styles.postImage}
        resizeMode="cover"
        accessibilityLabel={`Photo shared by ${post.name}`}
      />
      <View style={styles.counts} accessibilityLiveRegion="polite">
        <Text style={styles.count}>{post.likes} Likes</Text>
        <Text style={styles.count}>{post.comments} Comments</Text>
        <Text style={styles.count}>{post.shares} Shares</Text>
      </View>
      <View style={styles.actions}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`${post.liked ? "Unlike" : "Like"} ${post.name}'s post`}
          accessibilityState={{ selected: post.liked }}
          onPress={() => onAction(post.id, "like")}
          style={({ pressed }) => [
            styles.action,
            post.liked && styles.liked,
            pressed && styles.pressed,
          ]}
        >
          <Text style={[styles.actionText, post.liked && styles.likedText]}>
            {post.liked ? "♥ Liked" : "♡ Likes"}
          </Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Comment on ${post.name}'s post`}
          onPress={() => onAction(post.id, "comment")}
          style={({ pressed }) => [styles.action, pressed && styles.pressed]}
        >
          <Text style={styles.actionText}>＋ Comments</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Share ${post.name}'s post`}
          onPress={() => onAction(post.id, "share")}
          style={({ pressed }) => [styles.action, pressed && styles.pressed]}
        >
          <Text style={styles.actionText}>↗ Shares</Text>
        </Pressable>
      </View>
    </View>
  );
}
