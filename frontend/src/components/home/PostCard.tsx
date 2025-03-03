import { BlogPost } from '../../types/blogTypes';
import { Badge } from '@components/ui/badge';
import ImageWithLoading from '@components/ImageWithLoading';
import Link from "next/link";

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/post/${post.slug}`} className="block group">
      <article className="overflow-hidden h-full flex flex-col card-hover rounded-lg border bg-card">
        <div className="aspect-video overflow-hidden">
          <ImageWithLoading 
            src={post.coverImage} 
            alt={post.title}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center mb-3">
            <Badge variant="secondary" className="mr-2">
              {post.category}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
          
          <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="mt-auto flex items-center pt-4 border-t">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
              <ImageWithLoading src={post.author.avatar} alt={post.author.name} />
            </div>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.readTime} min read</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
