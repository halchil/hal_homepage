# 環境のセットアップ

## 共通の設定

```
$ sudo apt update && sudo apt upgrade -y
```

## Node.jsのセットアップ

Node.js は 公式 apt から入れると古いのでNodeSource の最新版(LTS 20.x など)を使うのが王道。

NodeSource(Node.js の最新版を公式よりも早く・安定して配布している会社のこと)を追加する。

```
$ curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

[結果]
2025-12-06 05:26:12 - Installing pre-requisites
Hit:1 http://ap-northeast-1.ec2.archive.ubuntu.com/ubuntu noble InRelease
Hit:2 http://ap-northeast-1.ec2.archive.ubuntu.com/ubuntu noble-updates InRelease
Hit:3 http://ap-northeast-1.ec2.archive.ubuntu.com/ubuntu noble-backports InRele
...
```

Node.js をインストールとバージョン確認

```
$ sudo apt install -y nodejs

$ node -v
v20.19.6

$ npm -v
10.8.2
```

## pm2（実行プロセスマネージャ）を入れる

```
$ sudo npm install -g pm2

[結果]
added 133 packages in 11s

13 packages are looking for funding
  run `npm fund` for details
npm notice
npm notice New major version of npm available! 10.8.2 -> 11.6.4
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.6.4
npm notice To update run: npm install -g npm@11.6.4
npm notice
```

pm2のバージョンを確認

```
$ pm2 -v

[結果]
...
[PM2] Spawning PM2 daemon with pm2_home=/home/ubuntu/.pm2
[PM2] PM2 Successfully daemonized
6.0.14
```

## Node.js プロジェクト初期化
まだ`package.json`が無ければプロジェクトを初期化する


```
$ npm init -y

[結果]
Wrote to /home/ubuntu/hal_homepage/package.json:

{
  "name": "hal_homepage",
  "version": "1.0.0",
  "description": "## 共通の設定",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 画面表示用の`index.js`を作成する。

```
[index.jsの内容]

cat << 'EOF' > index.js
import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello Node.js from hal_homepage!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
EOF
```

## index.jsを基にサーバを起動する

```
$ node index.js

[結果]
(node:12574) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/ubuntu/hal_homepage/index.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /home/ubuntu/hal_homepage/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
Server running on http://localhost:3000

```

アクセスURLで画面を表示することができた。
```
http://ec2-xxx-xxx-xxx-xxx.ap-northeast-1.compute.amazonaws.com:3000/
```

# Expressを導入する

```
[実行コマンド]
npm install express

[結果]
added 65 packages, and audited 66 packages in 4s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

`index.js`の内容を以下にする。
```
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/user", (req, res) => {
  res.json({ id: 1, name: "Haru" });
});

app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000");
});

```

# `Next.js`導入

`Next.js`はReactの上位互換なので、先に導入する。

空のディレクトリ、`nextjs`を作成する。
```
mkdir nextjs
cd nextjs
npx create-next-app@latest .

[結果]
✔ Would you like to use the recommended Next.js defaults? › No, customize settings
✔ Would you like to use TypeScript? … No / Yes
✔ Which linter would you like to use? › ESLint
✔ Would you like to use React Compiler? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
```

作成されたら、まず開発サーバを起動する。

```
npm run dev

[結果]
> nextjs@0.1.0 dev
> next dev

   ▲ Next.js 16.0.7 (Turbopack)
   - Local:         http://localhost:3000
   - Network:       http://172.31.7.229:3000

 ✓ Starting...
```
ちなみに、`npm run dev`が参照しているのは`package.json`内の "scripts" 定義である。

以下にアクセスすると、node.jsのホーム画面が表示される。
```
http://ec2-xxx-xxx-xxx-xxx.ap-northeast-1.compute.amazonaws.com:3000/
```

開発用ではなく「本番用」に動かすには
```
[実行コマンド]
npm run build

[結果]
  ▲ Next.js 16.0.7 (Turbopack)

   Creating an optimized production build ...
 ✓ Compiled successfully in 10.1s
 ✓ Finished TypeScript in 178.3ms    
 ✓ Collecting page data using 1 worker in 682.9ms    
 ✓ Generating static pages using 1 worker (4/4) in 827.8ms
 ✓ Finalizing page optimization in 28.5ms 


[実行コマンド]
pm2 start npm --name "hal_homepage" -- start

[結果]
[PM2] Starting /usr/bin/npm in fork_mode (1 instance)
[PM2] Done.
┌────┬─────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name            │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼─────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ hal_homepage    │ default     │ N/A     │ fork    │ 24550    │ 0s     │ 0    │ online    │ 0%       │ 35.0mb   │ ubuntu   │ disabled │
└────┴─────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘

[実行コマンド]
pm2 save

[結果]
[PM2] Saving current process list...
[PM2] Successfully saved in /home/ubuntu/.pm2/dump.pm2
```
停止する
```
pm2 stop hal_homepage

pm2 delete 0
pm2 delete 1
pm2 delete 2
```

削除方法は
```
pm2 delete hal_homepage

```

再起動する。※buildし直さないと変更が本番に反映されない。
```
npm run build
pm2 restart hal_homepage
```

プロセス一覧を見る
```
pm2 list
```

ログを見る

```
pm2 logs hal_homepage
```



