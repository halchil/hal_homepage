export default function CompanyPage() {
    return (
      <main className="min-h-screen bg-black text-green-400 font-mono p-6">
        <div className="max-w-3xl mx-auto mt-20 border border-green-600 p-6 rounded">
          
          <h1 className="text-xl mb-4">$ cat company.txt</h1>
          
          <pre className="whitespace-pre-wrap text-sm">
  HAL Corporation  
  AI・OSS・Cloud を中心にした開発スタジオ。  
  データ基盤構築、運用自動化、OSS コンサルティングなどを提供。
  
  $ uptime  
  3 years, 221 days, high availability mode: ON
          </pre>
  
        </div>
      </main>
    );
  }
  