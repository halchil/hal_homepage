This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# ナビバー作成
こんな感じのナビバーを作成する。
```
HAL Homepage | Home | Company | Service | Contact
```
まず、コンポーネント専用フォルダを作る


```
mkdir -p src/components
nano src/components/Header.js
```

`Header.js`の中身は以下のように記載する。
```
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <h1 className="text-xl font-bold text-gray-800">
          <Link href="/">HAL Homepage</Link>
        </h1>

        {/* メニュー */}
        <nav className="space-x-6 text-gray-700 hidden md:block">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/company" className="hover:text-blue-600">Company</Link>
          <Link href="/service" className="hover:text-blue-600">Service</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* スマホ用メニュー（後でハンバーガーにできる） */}
        <div className="md:hidden text-gray-700">
          Menu
        </div>
      </div>
    </header>
  );
}

```

# layout.js に Header を読み込む

Next.jsのApp Routerでは`src/app/layout.js`が “全ページ共通の枠”である。

`layout.js`の`export default function RootLayout`部分にヘッダー用の中身を追加。実ファイル参照

