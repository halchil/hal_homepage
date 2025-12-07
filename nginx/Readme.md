# セットアップ

前提
```
http://domain-name:3000
```
でアクセスできるようにしておく。

# Nginxのインストール
```
[実行コマンド]
sudo apt update

[実行コマンド]
sudo apt install -y nginx
```

まずは、この状態でNginx ホームを表示させたい

```
[実行コマンド]
sudo nginx -t

[結果]
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```


```
http://ec2-xxx-xxx-xxx-xxx.ap-northeast-1.compute.amazonaws.com
```
AWS側のインバウンドルールでも80番ポートを許可する。

表示できた。

また、nginx のホーム画面は`/usr/share/nginx/html/index.html`にある。

# 接続設定

## 80番ポートのみ(httpのみ)接続ファイルを配置

ルーティングを設定したファイルを作成
[hal_homepage_80](./hal_homepage_80)

以下にコピーファイルを作成

```
[実行コマンド]
sudo cp ./nginx/hal_homepage_80 /etc/nginx/sites-available

[確認コマンド]
ll /etc/nginx/sites-available/

[結果]
...
-rw-r--r-- 1 root root 2412 Nov 30  2023 default
-rw-r--r-- 1 root root 1011 Dec  6 12:00 hal_homepage_80
```

さらに、長いDNS名でも耐えられるように、`nginx.conf`を編集

```
sudo nano /etc/nginx/nginx.conf

# httpブロックの 中 に以下1行を追加
# server_names_hash_bucket_size 128;
```

```
[実行コマンド]
sudo ln -s /etc/nginx/sites-available/hal_homepage_80 /etc/nginx/sites-enabled/

[実行コマンド]
sudo nginx -t

[実行コマンド]
sudo systemctl restart nginx
```
`ln`は、ファイルやディレクトリにリンクを作るコマンド

これでhttpアクセスが可能となった。

## SSL認証の準備

Let's Encryptで登録を行う。

```
mkdir /usr/share/nginx/html/.well-known
mkdir /usr/share/nginx/html/.well-known

```

# index.html以外の表示
