export interface UpdateHistoryEvent {
  date: string;
  title: string;
  description: string;
}

export const updateHistoryData: UpdateHistoryEvent[] = [
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
