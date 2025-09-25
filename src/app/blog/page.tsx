import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getBlogPosts } from '@/lib/blog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { format } from 'date-fns';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                  The CS Compass Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Insights and articles about the world of computer science.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            {posts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.id}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>
                          {format(post.createdAt.toDate(), 'MMMM d, yyyy')}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3">
                          {post.content.substring(0, 150)}...
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                <p>No blog posts have been published yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
