import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, MessageSquare } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { blogPosts } from "../../../content/posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Grah AI Systems`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // A helper custom markdown component renderer to avoid heavy dependencies and build issues
  const renderContent = (markdownText) => {
    return markdownText.split("\n\n").map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;
      
      // Header 1
      if (trimmed.startsWith("# ")) {
        return (
          <h1 key={idx} className="text-3xl font-extrabold font-display text-slate-900 mt-10 mb-5 sm:text-4xl leading-tight">
            {trimmed.replace("# ", "")}
          </h1>
        );
      }
      
      // Header 2
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-xl font-bold font-display text-slate-900 mt-8 mb-4 border-b border-slate-200/60 pb-2">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      
      // Header 3
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-lg font-bold font-display text-slate-900 mt-6 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      
      // Bullets list
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed.split("\n").map((li) => li.replace(/^[-*]\s+/, ""));
        return (
          <ul key={idx} className="list-disc pl-5 my-4 space-y-2.5 text-sm leading-relaxed text-slate-700">
            {items.map((item, lIdx) => {
              const formattedItem = item
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-azure-600 hover:underline">$1</a>');
              return <li key={lIdx} dangerouslySetInnerHTML={{ __html: formattedItem }} />;
            })}
          </ul>
        );
      }
      
      // Number list
      if (trimmed.match(/^\d+\.\s+/)) {
        const items = trimmed.split("\n").map((li) => li.replace(/^\d+\.\s+/, ""));
        return (
          <ol key={idx} className="list-decimal pl-5 my-4 space-y-2.5 text-sm leading-relaxed text-slate-700">
            {items.map((item, lIdx) => {
              const formattedItem = item
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-azure-600 hover:underline">$1</a>');
              return <li key={lIdx} dangerouslySetInnerHTML={{ __html: formattedItem }} />;
            })}
          </ol>
        );
      }
      
      // Horizontal Line
      if (trimmed === "---") {
        return <hr key={idx} className="my-8 border-slate-200" />;
      }
      
      // Markdown Tables
      if (trimmed.startsWith("|")) {
        const rows = trimmed.split("\n").filter((r) => r.trim() && !r.includes("|-"));
        return (
          <div key={idx} className="overflow-x-auto my-6">
            <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 font-bold text-slate-900">
                  {rows[0]
                    .split("|")
                    .filter((_, cellIdx, arr) => cellIdx > 0 && cellIdx < arr.length - 1)
                    .map((cell, cellIdx) => (
                      <th key={cellIdx} className="px-4 py-3 font-semibold">
                        {cell.trim()}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    {row
                      .split("|")
                      .filter((_, cellIdx, arr) => cellIdx > 0 && cellIdx < arr.length - 1)
                      .map((cell, cellIdx) => {
                        const formattedCell = cell
                          .trim()
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-azure-600 hover:underline">$1</a>');
                        return (
                          <td
                            key={cellIdx}
                            className="px-4 py-3 text-slate-700"
                            dangerouslySetInnerHTML={{ __html: formattedCell }}
                          />
                        );
                      })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
      // Standard Paragraph
      const formattedParagraph = trimmed
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-azure-600 hover:underline">$1</a>');
      return (
        <p
          key={idx}
          className="text-sm leading-relaxed text-slate-600 my-5"
          dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        />
      );
    });
  };

  return (
    <>
      <Header />
      
      <main className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 min-h-screen bg-white">
        {/* Background ambient lights */}
        <div className="absolute inset-0 bg-grid pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-azure-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
            <span className="text-xs text-azure-600 font-bold uppercase tracking-wider bg-azure-55 bg-azure-50 border border-azure-100 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
          </div>

          {/* Article Header info */}
          <header className="border-b border-slate-200 pb-8 mb-10">
            <h1 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                <User size={14} className="text-azure-600" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Article Body */}
          <article className="prose max-w-none">
            {renderContent(post.content)}
          </article>

          {/* Contact CTA box specific to reader context */}
          <div className="mt-16 glass rounded-2xl p-6 sm:p-10 border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start items-center gap-2 text-azure-600">
                <MessageSquare size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Project Consultation</span>
              </div>
              <h4 className="font-display text-lg font-bold text-slate-900">
                Interested in deploying custom AI systems?
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                We custom-engineer AI agents, databases, and LLM integrations that replace tedious administrative tasks.
              </p>
            </div>
            <a
              href="mailto:support@grahai.com?subject=AI%20Integration%20Consultation"
              className="inline-flex items-center gap-1.5 rounded-xl bg-azure-600 hover:bg-azure-700 px-5 py-3 text-xs font-semibold text-white transition-colors shadow-md shadow-azure-600/10"
            >
              Get In Touch
              <ArrowLeft className="rotate-185" size={14} />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
