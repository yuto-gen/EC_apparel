プロジェクト概要

本プロジェクトは、React × Vite × TypeScript をベースに構築した モダンなECサイト です。
副業案件を想定したポートフォリオとして開発し、ユーザー側と管理者側の両機能を実装しています。

使用技術

フロントエンド: React 19 / TypeScript / Vite

状態管理: Zustand

データフェッチング: TanStack Query

フォームバリデーション: React Hook Form + Zod

スタイリング: Tailwind CSS

モックAPI: JSON Server

機能一覧
ユーザー側

商品一覧（グリッド表示、ホバーアニメーション）

商品詳細ページ（説明文・画像付き）

カート機能（数量変更、削除、合計金額表示）

お気に入り（ハートボタン、ローカルストレージ保存）

購入フロー（入力 → 確認 → 完了の3ステップ）

管理者側

ログイン後ダッシュボード表示

商品の追加・編集・削除

入力フォームのバリデーション

共通

ログイン画面（ユーザー／管理者切り替え）

ヘッダー／フッター（ブランドロゴ、SNSリンク付き）

白黒調のミニマルデザイン（海外EC風）

セットアップ
git clone <your-repo-url>
cd project-root
npm install
npm run server   # JSON Server 起動
npm run dev      # 開発環境起動

今後の拡張予定

バックエンド接続（Node.js / Laravel）

ユーザー認証

決済システム（Stripe / PayPal）


