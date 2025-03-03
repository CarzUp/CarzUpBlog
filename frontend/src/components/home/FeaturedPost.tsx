import { BlogPost } from '../../types/blogTypes';
import { Button } from '@components/ui/button';
import { Badge } from '@components/ui/badge';
import ImageWithLoading from '@components/ImageWithLoading';
import Link from "next/link";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-0">
        <ImageWithLoading src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10 animate-slide-up">
        <div className="max-w-3xl">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            {post.title}
          </h1>
          <p className="text-white/90 mb-6 text-lg md:text-xl line-clamp-2 md:line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <ImageWithLoading src={post.author.avatar} alt={post.author.name} />
            </div>
            <div>
              <p className="text-white font-medium">{post.author.name}</p>
              <p className="text-white/70 text-sm">
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })} · {post.readTime} min read
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <Link href={`/post/${post.slug}`}>Read Article</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
