const presets = [
  "@babel/preset-react",
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11",
        ie: "11"
      },
      useBuiltIns: "entry",
      modules: false,
    }
  ]
];

const plugins = [
  ["@babel/plugin-proposal-decorators", {"legacy": true}],
  ["@babel/plugin-proposal-class-properties", {"loose": true}]
];
module.exports = {presets, plugins};