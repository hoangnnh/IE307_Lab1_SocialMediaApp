// Nguyen Ngoc Huy Hoang - 23520532
// Metro resolves bundled images to React Native image sources.
declare module '*.jpg' {
  const source: import('react-native').ImageSourcePropType;
  export default source;
}
