
import { BlogPost } from '../../types/blogTypes';
import PostCard from './PostCard';

interface LatestPostsProps {
  posts: BlogPost[];
}

const LatestPosts = ({ posts }: LatestPostsProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-medium text-primary mb-2">DISCOVER</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold">Latest Articles</h3>
          </div>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0">
            Explore our collection of the latest automotive insights, stories, and reviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
