# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発コマンド

### 基本コマンド
- `pnpm install` - 依存関係のインストール
- `pnpm run dev` - 開発サーバー起動
- `pnpm run build` - プロダクションビルド
- `pnpm run preview` - プロダクションビルドのプレビュー
- `pnpm run deploy` - Cloudflare Pagesへのデプロイ

### 品質チェック
- `pnpm run check` - TypeScript型チェック
- `pnpm run lint` - ESLint + Prettier チェック  
- `pnpm run format` - Prettier フォーマット
- `pnpm run test` - 全テスト実行
- `pnpm run test:unit` - Vitest単体テスト
- `pnpm run test:integration` - Playwright統合テスト

### Panda CSS
- `pnpm run prepare` - Panda CSS コード生成（styled-systemフォルダ）

## 技術スタック

### フレームワーク
- **SvelteKit** - フルスタックフレームワーク
- **Svelte 5** - Next版を使用（runes syntaxなど）
- **TypeScript** - 型安全性確保

### スタイリング
- **Panda CSS** - CSS-in-JSライブラリ（`styled-system/`配下）
- **Melt UI** - コンポーネントライブラリ
- カスタムアニメーション（bubbleUp、glow、jumbo）

### デプロイ・インフラ
- **Cloudflare Pages** - ホスティング
- **Wrangler** - デプロイツール

## アーキテクチャ

### ディレクトリ構造
```
src/
├── routes/          # SvelteKit ルーティング
│   ├── (redirect)/  # リダイレクト用グループ
│   └── +page.svelte # メインページ
├── lib/
│   ├── components/  # 再利用コンポーネント
│   │   ├── layouts/ # レイアウト関連（Bubble、Ray）
│   │   ├── ui/      # UIコンポーネント（Avatar、Icon）
│   │   └── utils/   # ユーティリティコンポーネント
│   └── nyatinte/    # プロジェクト固有定数
└── app.css          # グローバルスタイル
```

### 設定ファイル
- `panda.config.ts` - Panda CSS設定（カスタムアニメーション定義）
- `svelte.config.js` - SvelteKit設定（Cloudflareアダプター）
- `wrangler.toml` - Cloudflare Workers設定

### コンポーネント設計
- Svelte 5 runes syntax使用（`$props()`など）
- Panda CSSのUtility-first approach
- TypeScript型定義必須

### パフォーマンス注意点
- Bubbleコンポーネントは多数のDOM要素を生成（`count`プロパティで制御）
- アニメーションはCSS transform中心でGPU最適化
- モバイルでのちらつき問題対策済み（transform内でscale指定）