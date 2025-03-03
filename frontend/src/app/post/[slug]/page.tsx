import { notFound } from "next/navigation";
import PostContent from "@components/post/PostContent";
import RelatedPosts from "@components/post/RelatedPosts";
import SharePost from "@components/post/SharePost";
import Newsletter from "@components/home/Newsletter";
import { blogPosts } from "@data/posts";

interface PostPageProps {
    params: { slug: string };
}

export default function PostPage({ params }: PostPageProps) {
    const { slug } = params;
    const post = blogPosts.find(post => post.slug === slug);

    // Redirect to 404 if post doesn't exist
    if (!post) return notFound();

    return (
        <>
            <div className="py-24">
                <div className="container relative">
                    <SharePost title={post.title} slug={post.slug} />
                    <PostContent post={post} />
                    <RelatedPosts currentPost={post} posts={blogPosts} />
                </div>
            </div>
            <Newsletter />
        </>
    );
}
