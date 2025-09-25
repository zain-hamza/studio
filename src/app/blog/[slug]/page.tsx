import { notFound } from 'next/navigation';
import { getBlogPost } from '@/lib/blog';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <article className="container prose prose-lg dark:prose-invert mx-auto max-w-4xl px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 text-primary">
            {post.title}
          </h1>
          <p className="text-muted-foreground mb-8">
            Published on {format(post.createdAt.toDate(), 'MMMM d, yyyy')}
          </p>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose-p:text-foreground/80 prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground"
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}

// Optional: Generate static pages for better performance
import { getBlogPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
