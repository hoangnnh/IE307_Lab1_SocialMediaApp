# Social Media Feed — LAB01, Exercise 1

Standalone React Native / Expo app. Opens directly to the social feed, with no tab navigation or other exercises.

## Run with Expo Go

Use Node.js 22.13+ and an Expo Go version supporting SDK 57.

```bash
cd social-media-app
npm ci
npx expo start
```

Keep phone and computer on the same Wi-Fi. Scan the terminal QR code with Expo Go (Android) or Camera (iPhone). If LAN connection fails, try `npx expo start --tunnel`; Expo may ask to install its tunnel dependency.

Optional browser preview: `npm run web`.

## Included

- Three distinct posts, with avatar, author, caption, and bundled image.
- Like/unlike toggles the button and adds/removes exactly one like.
- Every Comments or Shares tap increments its respective counter, as required by the lab.
- A horizontal divider above post actions and a scrollable FlatList.
- Props passed to reusable components, useState for post data, and StyleSheet styles.
- Images work offline once the app is loaded. No backend or account is required.

Comments and shares are simulated counters. State resets on app reload.

## Source structure

```text
App.js                       App shell and post state
src/data.js                  Initial posts and local image references
src/state.mjs                Immutable interaction updates
src/styles.js                All component styles
src/screens/FeedScreen.js     Scrollable feed
src/components/PostCard.js   Post details and action buttons
tests/state.test.mjs          Counter behavior tests
```

## Checks

```bash
npm test
npm run lint
npm run typecheck
npx expo export --platform all
```

## Photo credits

Bundled educational demo photos from Unsplash:
- https://images.unsplash.com/photo-1500534623283-312aade485b7
- https://images.unsplash.com/photo-1507525428034-b723cf961d3e
- https://images.unsplash.com/photo-1477959858617-67f85cf4f1df

Starter app icons are from the Expo blank template.
