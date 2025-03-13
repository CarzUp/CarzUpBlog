import PostsGrid from '@/components/posts/posts-grid';
import { getAllBlogPosts } from '@/services/posts';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by n8n automation.',
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();

  return (
    <>
      {/*<section className="mb-16 mt-0 space-y-8 md:mt-20">*/}
      {/*  <SearchBar />*/}
      {/*  <CategoryFilter allCategories={allCategories} />*/}
      {/*</section>*/}
      <PostsGrid allPosts={allPosts} />
    </>
  );
}