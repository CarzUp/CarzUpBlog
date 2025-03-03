import { notFound } from "next/navigation";
import CategoryHeader from "@components/category/CategoryHeader";
import PostCard from "@components/home/PostCard";
import Newsletter from "@components/home/Newsletter";
import { blogPosts, categories } from "@data/posts";

interface CategoryPageProps {
    params: { slug: string };
}

export default function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = params;

    const category = categories.find(cat => cat.slug === slug);
    const posts = blogPosts.filter(post => post.category.toLowerCase() === slug);

    // Redirect to 404 if category doesn't exist
    if (!category) return notFound();

    return (
        <>
            <CategoryHeader category={category} count={posts.length} />

            <section className="py-16">
                <div className="container">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {posts.map(post => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h2 className="text-2xl font-display font-bold mb-4">No Articles Found</h2>
                            <p className="text-muted-foreground mb-8">
                                We couldn&#39;t find any articles in this category. Check back later for new content.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Newsletter />
        </>
    );
}
