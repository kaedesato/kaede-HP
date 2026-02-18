export interface HistoryEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
  youtubeId?: string;
}

export const historyData: HistoryEvent[] = [
  {
    date: '2026-02-18',
    title: 'Webサイトリニューアル',
    description: 'SvelteKitを使用した新しいWebサイトを公開しました。',
  },
  {
    date: '2024-12-07',
    title: 'Vket 2024 Winterに出展',
    description: '',
    image: '/images/toyfactory.jpg',
  },
  {
    date: '2024-08-14',
    title: 'アバターV3になる',
    description: '',
    youtubeId: 'OVX9VTj-OlY',
  },
  {
    date: '2022-05-31',
    title: '収益化記念',
    description: '',
    youtubeId: '2Nu0yBEtWqM',
  },
  {
    date: '2024-05-26',
    title: 'ポケモンの型共有サイトで炎上',
    description: 'チャンネル登録者数が100人増える',
  },
  {
    date: '2024-01-12',
    title: 'インフルエンザに感染する',
    description: 'ついにリングフィットができた。',
    youtubeId: 'YiVuysgXZaI',
  },
  {
    date: '2023-10-15',
    title: 'Umbra Virtual Battleに出場する',
    description: '',
    youtubeId: 'Oh-0u67fd7s',
  },
  {
    date: '2023-07-12',
    title: 'コロナに感染する',
    description: 'リングフィットアドベンチャーをやろうとするも、リングコンが見つからず断念',
    youtubeId: 'mKEkWReHLSQ',
  },
  {
    date: '2023-03-07',
    title: 'ツェッテルカステン効果でチャンネル登録者数が300人を突破する',
    description: '配信中に突破しました。',
    youtubeId: '4tlkt3mQ6Y4',
  },
  {
    date: '2023/2/13',
    title: '3周年目前にしてチャネル登録者数200人を突破する',
    description: '特にツイッターなどで報告はしてません。',
  },
  {
    date: '2022/10/6',
    title: '誕生日目前にしてチャンネル登録者が100人を超える',
    description: 'チャンネル登録100人突破＆お誕生日配信をする。',
  },
  {
    date: '2022/9/6',
    title: '自己紹介動画(2022Edition)を投稿する',
    description: '',
    youtubeId: 'u3hP-8S8AlA',
  },
  {
    date: '2022/6/2',
    title: 'かえでの黙示録(discordサーバー)ができる',
    description: 'わたしのDiscordサーバー\nちゃんとしたのができたんだけど\n会話の内容が濃すぎる',
  },
  {
    date: '2022-04-14',
    title: 'かえで　年表というものを知る',
    description: 'ウェザーロイドの年表作成があまりにも良すぎて自分でも作ろうと思った。',
    youtubeId: 'SkZhySQeCZY',
  },
  {
    date: '2022/1',
    title: '現在のアバターになる。',
    description: '',
  },
  {
    date: '2020/3',
    title: 'アバターが変わる②',
    description: 'この時にオレンジのイメージカラーになりました。恋あすのキャラをモチーフにして作りました。',
  },
  {
    date: '2020/2/14',
    title: '最初の自己紹介動画をアップする',
    description: 'あまりにもクォリティが低いのと、今とアバターが違いすぎるので非公開に。',
  },
  {
    date: '2020/1',
    title: 'アバターを作り始める',
    description: 'この時作ったアバターは1か月くらいしか使われなかった。幻のアバター。',
  },
  {
    date: '2015/12',
    title: 'かえでの原型ができる',
    description: '詳細は伏せます。',
  },
  {
    date: '****/10/8',
    title: '生まれる',
    description: '生まれました。2700gとかだったような記憶。\n母子手帳が見つかればupします。',
  },
];
