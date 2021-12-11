# ReactBaseApp

ReactBaseApp はReact WebServiceを開発するためのテンプレート

# DEMO

【記入予定】

# Features

1. xxxxxx
2. xxxxxx
3. xxxxxx
4. xxxxxx
5. xxxxxx
6. xxxxxx

# Requirement

- @material-ui/core: "^4.12.3",
- @material-ui/icons: "^4.11.2",
- typescript: "^4.1.2",
- react: "^17.0.2",

# Usage

**プロジェクトダウンロードしてからの環境構築**

```bash
git clone git@github.com:Seventh-Pitch-com/ReactBaseApp.git
```

```bash
cd ReactBaseApp
yarn install
```

**env 編集**

```bash
cp .env.example .env
```

firebase のプロジェクト設定*firebaseConfig*の設定値をセットする。

```env
REACT_APP_FIREBASE_APIKEY="xxxxx"
REACT_APP_FIREBASE_DOMAIN="xxxxx"
REACT_APP_FIREBASE_DATABASE="https://xxxxx.firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID="xxxxx"
REACT_APP_FIREBASE_STORAGE_BUCKET="xxxxx"
REACT_APP_FIREBASE_SENDER_ID="xxxxx"
REACT_APP_FIREBASE_APP_ID="xxxxx"
```

> firebase のプロジェクト作成は「firestore Database」「Authentication」を開始しておくこと。

**react プロジェクト起動**

```bash
cd project-name
yarn start or npm start
```

# Note

```
.
├── doc // プロジェクトのドキュメント
├── public // asset郡
└── src
    ├── components //  各画面コンポーネント
    └── styles　//  各画面コンポーネントのCSS
.
├── README.md
├── doc // プロジェクトのドキュメント
│   └── REACT.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── components //  各画面コンポーネント
│   ├── firebase.ts
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── styles　//  各画面コンポーネントのCSS
├── tsconfig.json
```

# Author

- Author 濱本 賢夫
- Organization　Seventh-Pitch
- E-mail masao.hamamoto@seventh-pitch.com

# Document
[React Project Readme](./doc/REACT.md)

# License

TaskApp is Confidential.