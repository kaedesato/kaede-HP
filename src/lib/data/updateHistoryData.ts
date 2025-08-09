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
];
