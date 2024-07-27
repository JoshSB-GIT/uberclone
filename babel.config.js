module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",

        {
          moduleName: "@env",
          path: ".env",
          blocklist: null,
          allowlist: null,
          blacklist: null, // deprecated
          whitelist: null, // deprecated
          safe: false,
          allowUndefined: true,
        },
      ],
      ["react-native-reanimated/plugin"],
    ],
  };
};
