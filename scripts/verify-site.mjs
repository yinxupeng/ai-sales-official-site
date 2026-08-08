import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'docs/product-context.md',
  'docs/website-design.md',
  'src/content/siteContent.ts',
  'src/App.tsx',
  'src/styles.css',
  'index.html',
  'dist/index.html',
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const sourceFiles = [
  'index.html',
  'src/App.tsx',
  'src/styles.css',
];

const sourceText = sourceFiles
  .map((file) => readFileSync(join(root, file), 'utf8'))
  .join('\n');

const requiredText = [
  'Sabuddy.ai',
  '是成交导向的 AI 销冠智能体',
  '免费试用',
  '扫描体验',
  '扫描立即体验',
  '扫码添加我们立即免费试用',
  '关于我们',
  '观看演示',
  '7x24 小时在线',
  '三位一体的 AI 销冠系统',
  'SabuddyAgent',
  'SabuddyBuilder',
  'SabuddyClaw',
  '为你的行业量身打造',
  '最新动态',
  '常见问题',
  '隐私政策',
  '我们的价值观',
  '产品价值',
  '我们对产品的理解',
  'http://124.174.58.77/kf-adm/login',
  'target="_blank"',
  'rel="noreferrer"',
];

for (const text of requiredText) {
  if (!sourceText.includes(text)) {
    throw new Error(`Missing required text: ${text}`);
  }
}

const assetDir = join(root, 'dist/assets');
if (!existsSync(assetDir) || readdirSync(assetDir).length === 0) {
  throw new Error('Missing built assets in dist/assets');
}

console.log('Site verification passed.');
