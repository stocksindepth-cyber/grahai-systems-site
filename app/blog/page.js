import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { allPosts as blogPosts } from "../../content/allPosts";

export const metadata = {
  title: "Blog & AI Insights | Grah AI Systems",
  description: "Technical guides, implementation walkthroughs, and executive strategies on building autonomous AI agents, workflow automations, and LLM systems.",
};

export default function BlogListing() {
  return (
    <>
      <Header />
      
      <main className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 min-h-screen bg-slate-50/20">
        {/* Background ambient grids */}
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-azure-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>

          {/* Section Title */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-azure-600">
              GRAH AI SYSTEM INSIGHTS
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Blog & AI Product Engineering
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              We operate at the forefront of custom AI integration. Read our developer reports, model guides, and workflow case-studies written by practicing product engineers.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className="mb-16 glass rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white relative overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-azure-500/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-azure-50 border border-azure-200 text-azure-600 font-bold uppercase tracking-wider">
                      Featured · {blogPosts[0].category}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-400">
                      <Calendar size={12} />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-400">
                      <Clock size={12} />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  
                  <h2 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl hover:text-azure-600 transition-colors">
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      {blogPosts[0].title}
                    </Link>
                  </h2>
                  
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white border border-slate-200">
                      GA
                    </div>
                    <span className="text-xs font-bold text-slate-700">{blogPosts[0].author}</span>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-azure-600 hover:bg-azure-700 px-5 py-3 text-xs font-semibold text-white transition-colors shadow-md shadow-azure-600/10"
                    >
                      Read Article
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                
                {/* Visual placeholder */}
                <div className="h-64 sm:h-80 bg-slate-900 rounded-2xl border border-slate-950 flex flex-col items-center justify-center p-6 text-center text-white/30 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_100%)]" />
                  <span className="text-xs font-mono uppercase text-azure-400/60 mb-2">// GRAPH_SCHEMA_LOG</span>
                  <div className="font-mono text-2xl font-bold text-white/10 animate-pulse tracking-widest uppercase">
                    &lt; AI_AGENT_SYSTEM &gt;
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Standard Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="glass rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:border-azure-500/20 transition-all hover:scale-[1.01] bg-white shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500 mb-3.5">
                    <span className="font-bold uppercase text-azure-600">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug hover:text-azure-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-slate-500 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User size={12} className="text-slate-400" />
                    <span className="text-[10px] font-semibold text-slate-600">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-azure-600 hover:text-slate-900 transition-colors"
                  >
                    Read More
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
