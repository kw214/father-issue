import { defineConfig } from 'father';
import * as path from "path";
const { dependencies } = require('./package.json');

export default defineConfig({
  // prebundle: {
  //   deps: dependencies.keys,
  //   extraExternals: {
  //     'antd': path.join(process.cwd(), './node_modules/antd'),
  //     'react': path.join(process.cwd(), './node_modules/react'),
  //     'react-dom': path.join(process.cwd(), './node_modules/react-dom'),
  //   }
  // },
  esm: {
    transformer: 'esbuild',
    output: 'es'
  },
  cjs: {
    transformer: 'esbuild',
    output: 'lib',
  },
  // 打包的产物若需引入 antd ，则通过按需加载形式引入。
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
    ],
  ],
});
