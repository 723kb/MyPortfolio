export const works = [
  {
    id: 1,
    title: "日→中　簡易翻訳チャットボット",
    technologyUsed:
      "HTML / Tailwind CSS / JavaScript / Firebase Realtime Database / MyMemory API / Web Speech API ",
    description:
      "日本語で入力した内容をMyMemory APIを使用し、中国語に翻訳できるチャットbotアプリ。",
    image: "/images/work1.png",
    mainFunction: "中国語の読み上げ、投稿内容検索、レスポンシブデザイン",
    comment: [
      "本家のLINEに見た目をできる限り近づけた。",
      "LINE風チャットのため、投稿するたびに新規投稿部分までスクロールするように工夫した。",
      "動きが多すぎると画面酔いしたため、投稿時のみスクロールするようにこだわった。",
    ].join("\n"),
    point: [
      "日本語メッセージと連動し中国語メッセージを削除する部分が難しかった。",
      "フラグを立ててtrue,falseで判定するとうまくいった。",
    ].join("\n"),
    remarks: "firebaseAPIキーを抜いているのでデモは動きません。",
    github: "https://github.com/723kb/kadai04_chat",
    demo: "https://723kb.github.io/kadai04_chat/",
  },
  {
    id: 2,
    title: "駅メモ",
    technologyUsed:
      "HTML / Tailwind CSS / JavaScript / localstorage / GoogleMapAPI / ODPT API",
    description:
      "GoogleMap APIとODPT APIを利用し、駅に紐づけてメモができるアプリ。",
    image: "/images/work2.png",
    mainFunction: 
      "ユーザーの現在地の取得、ユーザーの位置から近い東京メトロの駅を視覚的に表示、レスポンシブデザイン",
    comment: [
      "ユーザーの位置情報を取得し、距離に応じて動的に駅を示すピンのスタイルが変更される点。",
      "見やすさ、駅カラーリングにこだわった。画像は生成AIで作成した。",
    ].join("\n"),
    point: [
      "ODPT APIから目的の情報を取得する部分が意図した挙動にならず難しかった。",
    ].join("\n"),
    remarks: "APIキーを抜いているのでデモは動きません。",
    github: "https://github.com/723kb/kadai05_api",
    demo: "https://723kb.github.io/kadai05_api/",
  },
  {
    id: 3,
    title: "EchoBoard",
    technologyUsed:
      "HTML / Tailwind CSS / JavaScript / PHP / MySQL / GeolocationAPI / OpenStreetMap / Leaflet",
    description: "テキスト・写真・位置情報が投稿できるSNSアプリ。",
    image: "/images/work3.png",
    mainFunction:
      "ユーザ登録、ログイン/ログアウト、テキスト・写真・位置情報の投稿、いいね、レスポンシブデザイン",
    comment: [
      "投稿にいいねができる点。",
      "ユーザー名を変更したときに、過去に投稿した内容のユーザー名も連動して変更できる点。",
      "投稿をクリックすると自動で地図にスクロールし、かつその投稿のポップアップが中央に配置されるようにした。",
    ].join("\n"),
    point: [
      "sessionにどの情報を持たせるかを考えながら作業することが難しかった。",
      "ディレクトリ構成を考えること。",
    ].join("\n"),
    github: "https://github.com/723kb/kadai11_php_all",
    demo: "https://723kb.jp/kadai11_php_all/",
  },
];
