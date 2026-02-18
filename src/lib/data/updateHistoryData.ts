export interface UpdateHistoryEvent {
  date: string;
  title: string;
  description: string;
}

export const updateHistoryData: UpdateHistoryEvent[] = [
  {
    date: '2026-02-18',
    title: '公式のSato Kaedeサイトを実装',
    description: 'GitHub Pagesでの公開に向けた最終調整を行いました。'
  },
  {
    date: '2025-08-11',
    title: 'ダークモード（dimテーマ）に固定',
    description: 'DaisyUIのテーマをdimに固定し、常にダークモードで表示されるように変更しました。'
  },
  {
    date: '2025-08-09',
    title: '画像のローカル化',
    description: 'WordPressへの依存を排除するため、すべての画像をローカルアセットとして管理するように変更しました。'
  },
  {
    date: '2025-08-09',
    title: 'サイトがアプリになりました！',
    description:
      'ホームページをPWA（プログレッシブウェブアプリ）に対応させました。スマートフォンのホーム画面にサイトを追加して、アプリのように素早くアクセスすることができます。',
  },
  {
    date: '2025-08-09',
    title: 'Cloudflareでサイト公開',
    description:
      '開発中のサイトを初めてインターネットに公開しました。Cloudflare Pagesを利用して、高速で安定した配信を実現しています。',
  },
  {
    date: '2025-08-08',
    title: 'サイトをSvelteKitで再構築',
    description:
      '長年運用してきたWordPressサイトを、モダンなフレームワークであるSvelteKitとDaisyUIを使って全面的にリニューアルしました。',
  },
  {
    date: '2025-08-08',
    title: 'リポジトリを初期化',
    description: 'このウェブサイトのすべての始まりです。今後の開発のためにGitリポジトリを作成しました。',
  },
];
