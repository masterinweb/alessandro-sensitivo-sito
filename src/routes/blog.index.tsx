import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { JazzPlayer } from "@/components/site/JazzPlayer";
import { BLOG_POSTS } from "@/data/blogPosts";
import { telHref } from "@/lib/contact";

const TITLE = "Blog & Video — Alessandro · Sensitivo e Chiaroveggente";
const DESCRIPTION = "Articoli, riflessioni e video di Alessandro sulle percezioni extrasensoriali e sul cammino interiore.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-midnight/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="font-script text-3xl text-primary">
            Alessandro
          </Link>
          <div className="flex items-center gap-3">
            <Button asChild variant="veil" size="sm">
              <Link to="/">
                <ArrowLeft /> Torna alla Home
              </Link>
            </Button>
            <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
              <a href={telHref}>
                <Phone /> 337 70 92 63
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-28 pt-28 md:pt-36">
        <Reveal>
          <div className="text-center">
            <p className="font-display text-xs uppercase tracking-[0.2em] sm:tracking-[0.35em] text-primary">
              Diario · Riflessioni · Video
            </p>
            <h1 className="mt-4 text-3xl uppercase leading-tight text-foreground sm:text-4xl md:text-6xl">
              Il Blog di <span className="text-gold animate-shimmer">Alessandro</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Approfondimenti, esperienze di oltre 52 anni e contributi video dedicati alle percezioni extrasensoriali.
            </p>
            <div className="gold-rule mx-auto mt-6 w-24" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 100}>
              <article className="arcana-frame group flex h-full flex-col overflow-hidden rounded-lg border border-primary/35 bg-midnight/80 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="relative block aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-primary/50 bg-midnight/85 px-3 py-1 font-display text-[11px] uppercase tracking-wider text-primary">
                    {post.category}
                  </span>
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-midnight">
                    <PlayCircle className="h-3.5 w-3.5" /> Video
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-primary" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-primary" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-primary hover:underline"
                    >
                      Leggi e guarda il video <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </main>

      <JazzPlayer />
    </div>
  );
}