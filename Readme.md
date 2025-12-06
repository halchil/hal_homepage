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












Next.js（React）で作る場合

```
sudo apt install nodejs npm -y
sudo npm install pm2 -g
```

Next.js プロジェクトをデプロイ

```
pm2 start npm --name "corporate-site" -- start
pm2 save
```



$ sudo apt install nginx git ufw -y
$ ufw allow 'Nginx Full'
