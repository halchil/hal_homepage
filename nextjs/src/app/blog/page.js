import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import Link from "next/link";

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "src/app/blog/posts");

  const files = fs
    .readdirSync(postsDir)
    .filter(f => f.endsWith(".yml") || f.endsWith(".yaml"));

  const posts = files
    .map(file => {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, "utf8");
      const data = yaml.load(content);
      return { ...data };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-10">
      <div className="max-w-4xl mx-auto mt-10">

        <h1 className="text-3xl mb-8 text-green-300">
          $ blog — latest posts
        </h1>

        <div className="flex flex-col gap-8">
          {posts.map(post => (
            <a
              key={post.title}
              href={post.note_url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 p-6 rounded-lg hover:bg-green-900/30 transition block"
            >
              <h2 className="text-2xl mb-2 text-green-200">{post.title}</h2>

              <div className="text-sm text-green-500 mb-3">
                {post.date}
              </div>

              <p className="text-green-300 mb-2">{post.summary}</p>

              <div className="flex gap-2 flex-wrap mt-3">
                {post.tags?.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-green-700/40 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}
