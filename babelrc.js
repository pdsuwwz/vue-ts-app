var babelConfig = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "58",
          "ie": "6"
        }
      }
    ]
  ],
  "plugins": [
    "lodash",
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-json-strings",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    // 如果使用了 ts，那么此项配置就必须在 @babel/plugin-proposal-decorators 的后面
    ["@babel/plugin-proposal-class-properties",{ "loose": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-transform-modules-commonjs",
    // [
    //   "babel-plugin-react-css-modules",
    //   {
    //     "generateScopedName": "[name]_[local]_[hash:base64:5]",
    //     "webpackHotModuleReloading": true,
    //     "filetypes": {
    //       ".scss": {
    //         "syntax": "postcss-scss"
    //       }
    //     }
    //   }
    // ],
    ["module-resolver", {
      "alias": {
        "@commMdule": "./src/styles",
        "@images": "./assets"
      }
    }]
  ]
};

module.exports = babelConfig;