
import { BlogPost } from '../../types/blogTypes';
import PostCard from '@components/home/PostCard';

interface RelatedPostsProps {
  currentPost: BlogPost;
  posts: BlogPost[];
}

const RelatedPosts = ({ currentPost, posts }: RelatedPostsProps) => {
  // Filter out the current post and get posts in the same category
  const relatedPosts = posts
    .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 border-t">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
          You Might Also Like
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {relatedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
