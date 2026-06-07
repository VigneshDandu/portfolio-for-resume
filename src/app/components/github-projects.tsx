import { useEffect, useState } from "react";
import { Star, GitFork, ExternalLink, Github, Loader2, RefreshCw } from "lucide-react";

const GITHUB_USERNAME = "VigneshDandu";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
  archived: boolean;
  updated_at: string;
  pushed_at: string;
};

const langColor: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  Java: "#b07219",
  Shell: "#89e051",
  Dockerfile: "#384d54",
};

export function GithubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        { headers: { Accept: "application/vnd.github+json" } }
      );
      if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
      const data: Repo[] = await res.json();
      const filtered = data
        .filter((r) => !r.fork && !r.archived)
        .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.pushed_at) - +new Date(a.pushed_at));
      setRepos(filtered);
    } catch (e: any) {
      setError(e.message || "Failed to load repos");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <div className="inline-flex items-center gap-2 text-purple-300">
            <span className="w-6 h-px bg-purple-400/60" />
            <span className="uppercase tracking-[0.2em]">Projects</span>
          </div>
          <h2 className="mt-3 tracking-tight" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 500 }}>
            Straight from GitHub.
          </h2>
          <p className="mt-2 text-neutral-400">Live feed of public repos from <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="text-purple-300 hover:underline">@{GITHUB_USERNAME}</a></p>
        </div>
        <button onClick={load} className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition flex items-center gap-2 text-neutral-300">
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
        </button>
      </div>

      {loading && (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 rounded-2xl border border-white/5 bg-white/[0.02] animate-pulse" />
          ))}
        </div>
      )}

      {error && !loading && (
        <div className="mt-10 p-6 rounded-2xl border border-red-500/20 bg-red-500/5 text-red-300 flex items-center gap-3">
          <Loader2 className="w-5 h-5" /> Couldn't load repos: {error}
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-neutral-400">
          No public repos found yet.
        </div>
      )}

      {!loading && repos.length > 0 && (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((r) => (
            <a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/15 hover:from-white/[0.06] transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 text-white group-hover:text-purple-300 transition">
                  <Github className="w-4 h-4 shrink-0" />
                  <span className="truncate">{r.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition shrink-0" />
              </div>
              <p className="mt-3 text-neutral-400 leading-relaxed line-clamp-3 min-h-[3.75rem]">
                {r.description || "No description provided."}
              </p>
              {r.topics?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.topics.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">{t}</span>
                  ))}
                </div>
              )}
              <div className="mt-auto pt-5 flex items-center gap-4 text-neutral-400">
                {r.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColor[r.language] || "#888" }} />
                    {r.language}
                  </span>
                )}
                <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> {r.stargazers_count}</span>
                <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" /> {r.forks_count}</span>
                {r.homepage && (
                  <a href={r.homepage} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="ml-auto text-purple-300 hover:underline">Live</a>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
