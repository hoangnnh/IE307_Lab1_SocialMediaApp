// Nguyen Ngoc Huy Hoang - 23520532
export function updatePost(posts, id, action) {
  return posts.map((post) => {
    if (post.id !== id) return post;
    if (action === "like")
      return {
        ...post,
        liked: !post.liked,
        likes: post.likes + (post.liked ? -1 : 1),
      };
    if (action === "comment") return { ...post, comments: post.comments + 1 };
    if (action === "share") return { ...post, shares: post.shares + 1 };
    return post;
  });
}
