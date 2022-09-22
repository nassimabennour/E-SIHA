module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ['./src'],
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.json',
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        '.ios.js',
        '.ios.jsx',
        '.ios.ts',
        '.ios.tsx',
        '.android.js',
        '.android.jsx',
        '.android.ts',
        '.android.tsx',
      ],
      "alias": {
        "^react-native$": "react-native-web"
      }
    }]
  ]
};
