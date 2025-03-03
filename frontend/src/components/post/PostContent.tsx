
import { BlogPost } from '../../types/blogTypes';
import { Badge } from '@components/ui/badge';
import ImageWithLoading from '@components/ImageWithLoading';

interface PostContentProps {
  post: BlogPost;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
          {post.title}
        </h1>
        
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <ImageWithLoading src={post.author.avatar} alt={post.author.name} />
          </div>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-muted-foreground text-sm">
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })} · {post.readTime} min read
            </p>
          </div>
        </div>
      </div>
      
      <div className="aspect-video w-full rounded-lg overflow-hidden mb-10">
        <ImageWithLoading src={post.coverImage} alt={post.title} />
      </div>
      
      <div 
        className="prose prose-lg md:prose-xl max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      
      <div className="flex flex-wrap gap-2 mb-10">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="rounded-full">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="border-t pt-8">
        <h3 className="font-display text-xl font-semibold mb-4">About the Author</h3>
        <div className="flex items-start">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <ImageWithLoading src={post.author.avatar} alt={post.author.name} />
          </div>
          <div>
            <p className="font-medium mb-2">{post.author.name}</p>
            <p className="text-muted-foreground">{post.author.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostContent;
