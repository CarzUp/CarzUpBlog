import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import NotionPage from '@/components/notion-page';
import RelatedPosts from '@/components/posts/related-posts';
import { Post } from '@/types/post';

// API call to fetch a single post by slug
async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`https://blog-api.carzup.world/api/posts/slug/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}

// API call to fetch related posts
async function getRelatedPosts(type: string): Promise<Post[]> {
  try {
    const response = await fetch(`https://blog-api.carzup.world/api/posts?type=${type}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.data; // Extracting posts array from API response
  } catch (error) {
    console.error('Failed to fetch related posts:', error);
    return [];
  }
}

export default async function PostPage({
                                         params: { slug },
                                       }: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  if (post.status !== 'published') {
    return (
      <article
        data-revalidated-at={new Date().getTime()}
        className="mx-auto mt-40 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">Post Not Found</h2>
        <Link href="/blog">
          <span className="mr-2">&larr;</span>
          <span>Go to list page</span>
        </Link>
      </article>
    );
  }

  const relatedPosts: Post[] = await getRelatedPosts(post.type);

  return (
    <>
      <article
        data-revalidated-at={new Date().getTime()}
        className="mt-4 flex flex-col items-center md:mt-20"
      >
        <NotionPage post={post} />
      </article>
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}

// Generate static paths
export async function generateStaticParams() {
  try {
    const response = await fetch(`https://blog-api.carzup.world/api/posts`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      return [];
    }

    const { data } = await response.json();
    return data.map((post: Post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Failed to fetch all posts:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({
                                         params: { slug },
                                       }: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(slug);

  return post
    ? {
      title: post.title,
      openGraph: {
        images: [
          {
            url: post.image,
            width: 400,
            height: 300,
          },
        ],
      },
    }
    : {};
}
