import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { JazzPlayer } from "@/components/site/JazzPlayer";
import { BLOG_POSTS } from "@/data/blogPosts";
import { telHref } from "@/lib/contact";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Alessandro` : "Articolo — Alessandro" },
      { name: "description", content: loaderData?.excerpt ?? "" },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-midnight/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="font-script text-3xl text-primary">
            Alessandro
          </Link>
          <Button asChild variant="veil" size="sm">
            <Link to="/blog">
              <ArrowLeft /> Tutti gli articoli
            </Link>
          </Button>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 pb-28 pt-28 md:pt-36">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary/45 bg-midnight/80 px-4 py-1 font-display text-xs uppercase tracking-[0.22em] text-primary">
              {post.category}
            </span>
            <h1 className="mt-4 text-2xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              {post.subtitle}
            </p>
            <div className="mt-4 flex items-center justify-center gap-5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" /> {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" /> {post.readTime}
              </span>
            </div>
            <div className="gold-rule mx-auto mt-6 w-24" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <a
            href={post.isShort ? `https://www.youtube.com/shorts/${post.youtubeId}` : `https://www.youtube.com/watch?v=${post.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="arcana-frame group relative mt-10 block overflow-hidden rounded-lg border border-primary/40 bg-midnight shadow-card transition-transform duration-300 hover:scale-[1.01]"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={`https://i.ytimg.com/vi/${post.youtubeId}/hqdefault.jpg`}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/35 to-midnight/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-midnight/85 text-primary shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="rounded-full border border-primary/50 bg-midnight/85 px-4 py-1.5 font-display text-xs uppercase tracking-[0.2em] text-gold">
                  Guarda il video su YouTube
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="arcana-frame mt-10 space-y-6 rounded-lg border border-primary/35 bg-midnight/80 p-6 text-lg leading-relaxed text-foreground/90 shadow-card sm:p-10">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="border-t border-border/60 pt-6 text-center">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-primary">
                Desideri un confronto diretto con Alessandro?
              </p>
              <div className="mt-4">
                <Button asChild variant="gold" size="lg">
                  <a href={telHref}>
                    <Phone /> Chiama ora 337 70 92 63
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </article>

      <JazzPlayer />
    </div>
  );
}