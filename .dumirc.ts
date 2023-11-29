import { defineConfig } from 'dumi';

const basePath = '/arvin-components/';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Arvin UI',
    footer: false,
  },
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  base: basePath,
  publicPath: basePath,
});
