// Student: YOUR_NAME | MSSV: YOUR_STUDENT_ID
import test from 'node:test';
import assert from 'node:assert/strict';
import { updatePost } from '../src/state.mjs';
const seed = () => [{ id: 'a', likes: 2, comments: 0, shares: 0, liked: false }, { id: 'b', likes: 5, comments: 1, shares: 3, liked: false }];
test('Like toggles once and returns to its initial count without mutating another post', () => {
  const posts = seed(); const liked = updatePost(posts, 'a', 'like');
  assert.equal(liked[0].likes, 3); assert.equal(liked[0].liked, true);
  assert.deepEqual(updatePost(liked, 'a', 'like'), posts);
  assert.equal(liked[1], posts[1]); assert.equal(posts[0].likes, 2);
});
test('Comments and shares count every tap, independently', () => {
  let posts = seed();
  for (let i = 0; i < 20; i++) posts = updatePost(posts, 'a', 'comment');
  for (let i = 0; i < 7; i++) posts = updatePost(posts, 'a', 'share');
  assert.equal(posts[0].comments, 20); assert.equal(posts[0].shares, 7);
  assert.equal(posts[0].likes, 2); assert.deepEqual(posts[1], seed()[1]);
});
